import { Component, Input, inject, computed, effect, signal, OnDestroy, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService, PredictHQItem } from '../services/shared-api-data.service';
import { DatePipe } from '@angular/common';

interface TimerState {
  display: string;
  isCountdown: boolean;
  isActive: boolean;
  totalSeconds: number;
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  template: `Ends: <span [ngClass]="isWithinWindow ? 'soon' : 'later' ">{{ timerState().display }} </span>`
})
export class TimerComponent implements OnInit, OnDestroy {
  
  private intervalId: number | null = null;
  private targetTimestamp = signal<string | null>(null);
  private currentTime = signal<Date>(new Date());
  isWithinWindow: boolean | undefined;
  @Input() itemData!: PredictHQItem;
  @Input() itemIndex!: number;
  eventData = computed(() => this.sharedDataService.getData());
  
  protected predictedEnd = computed(() => {
    return this.itemData?.predicted_end || '';
  });

  // Computed signal that calculates the timer state
  timerState = computed<TimerState>(() => {
    const timestamp = this.targetTimestamp();
    const now = this.currentTime(); 
    
    if (!timestamp) {
      return {
        display: '00:00:00',
        isCountdown: true,
        isActive: false,
        totalSeconds: 0
      };
    }

    const target = new Date(timestamp);
    
    // Calculate difference (both timestamps are UTC)
    const diffMs = target.getTime() - now.getTime();
    const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);
    
    // Check if within 30-minute window (with small buffer for processing time)
    const thirtyMinutesMs = 10230 * 60 * 1000 + 5000; // Add 5 second buffer
    this.isWithinWindow = Math.abs(diffMs) <= thirtyMinutesMs;
    
    if (!this.isWithinWindow) {

        // Convert out of window UTC time to local time.
        const y = (this.itemData?.predicted_end ? this.itemData?.predicted_end : this.itemData?.end_local || '');
        // Convert UTC timestamp to local time
        const localDate = new Date(y); 

      return {
        display: this.datePipe.transform(localDate, 'h:mm a') || '',
        isCountdown: true,
        isActive: false,
        totalSeconds: 0
      };
    } 

    const isCountdown = diffMs > 0;
    const display = this.formatTime(diffSeconds, !isCountdown);

    return {
      display,
      isCountdown,
      isActive: true,
      totalSeconds: diffSeconds
    };
  });

  constructor( 
    public sharedDataService: SharedDataService,
    @Inject(DatePipe) private datePipe: DatePipe
   ) {
    // Effect to handle timer updates when target changes
    effect(() => {
      const state = this.timerState();
      if (state.isActive) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    });
  }
  
  ngOnInit(): void {
      this.startCountDown();
  }

  startCountDown(): void {
      this.setApiTimestamp(this.itemData?.predicted_end ? this.itemData?.predicted_end : this.itemData?.end_local || '');
  }

 // Public method to set the timestamp from API
  setApiTimestamp(timestamp: string) {
    this.targetTimestamp.set(timestamp);
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  private formatTime(seconds: number, isNegative: boolean): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return isNegative ? `-${timeString}` : timeString;
  }

  private startTimer() {
    // Clear any existing timer
    this.stopTimer();
    
    this.intervalId = window.setInterval(() => {
      // Update the current time signal to trigger recalculation
      this.currentTime.set(new Date());
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Test methods for demonstration - remove later
  testFutureTime() {
    // 29.5 minutes from now
    const future = new Date(Date.now() + 29.5 * 60 * 1000);
    this.setApiTimestamp(future.toISOString());
  }

  testPastTime() {
    // 29.5 minutes ago
    const past = new Date(Date.now() - 29.5 * 60 * 1000);
    this.setApiTimestamp(past.toISOString());
  }

  testCurrentTime() {
    this.setApiTimestamp(new Date().toISOString());
  }

  // Additional test methods for quicker demo
  testFuture10Min() {
    // 10 minutes from now
    const future = new Date(Date.now() + 10 * 60 * 1000); 
    this.setApiTimestamp(future.toISOString());
  }

  testPast10Min() {
    // 10 minutes ago
    const past = new Date(Date.now() - 10 * 60 * 1000);
    this.setApiTimestamp(past.toISOString());
  }
}

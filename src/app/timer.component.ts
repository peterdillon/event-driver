import { Component, computed, effect, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  template: `
    <div class="timer-container">
      <div class="timer-display" 
           [class.countdown]="timerState().isCountdown"
           [class.countup]="!timerState().isCountdown"
           [class.inactive]="!timerState().isActive">
        {{ timerState().display }}
      </div>
      <div class="timer-status">
        @if (timerState().isActive) {
          @if (timerState().isCountdown) {
            <span class="status-text">Time remaining</span>
          } @else {
            <span class="status-text">Time elapsed</span>
          }
        } @else {
          <span class="status-text">Timer inactive</span>
        }
      </div>
      
      <!-- Test buttons for demo -->
      <div class="test-controls">
        <button (click)="testFutureTime()">Test Future (29.5 min)</button>
        <button (click)="testPastTime()">Test Past (-29.5 min)</button>
        <button (click)="testFuture10Min()">Test Future (10 min)</button>
        <button (click)="testPast10Min()">Test Past (-10 min)</button>
        <button (click)="testCurrentTime()">Test Current Time</button>
        <button (click)="stopTimer()">Stop Timer</button>
      </div>
    </div>
  `,
  styles: [`
    .timer-container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 12px;
      background: #f8f9fa;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .timer-display {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 10px;
      padding: 20px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .timer-display.countdown {
      background: #e3f2fd;
      color: #1976d2;
      border: 2px solid #2196f3;
    }

    .timer-display.countup {
      background: #fff3e0;
      color: #f57c00;
      border: 2px solid #ff9800;
    }

    .timer-display.inactive {
      background: #f5f5f5;
      color: #757575;
      border: 2px solid #bdbdbd;
    }

    .timer-status {
      margin-bottom: 20px;
    }

    .status-text {
      font-size: 1rem;
      color: #666;
      font-weight: 500;
    }

    .test-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .test-controls button {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      background: #6c757d;
      color: white;
      cursor: pointer;
      font-size: 0.875rem;
      transition: background-color 0.2s;
    }

    .test-controls button:hover {
      background: #5a6268;
    }
  `]
})
export class TimerComponent implements OnDestroy {
  private intervalId: number | null = null;
  private targetTimestamp = signal<string | null>(null);
  private currentTime = signal<Date>(new Date());
  
  // Computed signal that calculates the timer state
  timerState = computed<TimerState>(() => {
    const timestamp = this.targetTimestamp();
    const now = this.currentTime(); // Use the signal instead of new Date()
    
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
    const thirtyMinutesMs = 30 * 60 * 1000 + 5000; // Add 5 second buffer
    const isWithinWindow = Math.abs(diffMs) <= thirtyMinutesMs;
    
    if (!isWithinWindow) {
      return {
        display: 'Out of range',
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

  constructor() {
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
    this.stopTimer(); // Clear any existing timer
    
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

  // Public method to set the timestamp from API
  setApiTimestamp(timestamp: string) {
    this.targetTimestamp.set(timestamp);
  }

  // Test methods for demonstration
  testFutureTime() {
    const future = new Date(Date.now() + 29.5 * 60 * 1000); // 29.5 minutes from now
    this.setApiTimestamp(future.toISOString());
  }

  testPastTime() {
    const past = new Date(Date.now() - 29.5 * 60 * 1000); // 29.5 minutes ago
    this.setApiTimestamp(past.toISOString());
  }

  testCurrentTime() {
    this.setApiTimestamp(new Date().toISOString());
  }

  // Additional test methods for quicker demo
  testFuture10Min() {
    const future = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
    this.setApiTimestamp(future.toISOString());
  }

  testPast10Min() {
    const past = new Date(Date.now() - 10 * 60 * 1000); // 10 minutes ago
    this.setApiTimestamp(past.toISOString());
  }
}

// Usage example in your service or component:
export class ApiTimerService {
  constructor(private timerComponent: TimerComponent) {}

  handleApiResponse(apiTimestamp: string) {
    // When you receive "2025-05-29T06:10:00Z" from your API
    this.timerComponent.setApiTimestamp(apiTimestamp);
  }
}
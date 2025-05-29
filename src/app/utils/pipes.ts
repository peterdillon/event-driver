import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

// -------------------------------
@Pipe({ name: 'customEndTime' })
export class CustomEndTimePipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    return super.transform(value, "h:mm a");
  }
}

// -------------------------------
@Pipe({ name: 'removeSourced' })
export class RemoveSourced implements PipeTransform {
  transform(value: string): string {
    value.replace(/\s+/g, '');
    return value.replace('Sourced from predicthq.com', '');
  }
}

// -------------------------------
@Pipe({ name: 'isEmpty' })
export class IsEmptyPipe implements PipeTransform {
  transform(value: any): boolean {
    return value === null || value === undefined || value === 'No data';
  }
}

// -------------------------------
@Pipe({ name: 'shortNumber' })
export class ShortNumberPipe implements PipeTransform {
  transform(value: number, precision: number = 0): string {
    if (value) {
      if (value < 1000) {
            return value.toString();
          }
          const abs = Math.abs(value);
          if (abs >= Math.pow(10, 12)) {
            return (value / Math.pow(10, 12)).toFixed(precision) + 'T';
          } else if (abs >= Math.pow(10, 9)) {
            return (value / Math.pow(10, 9)).toFixed(precision) + 'B';
          } else if (abs >= Math.pow(10, 6)) {
            return (value / Math.pow(10, 6)).toFixed(precision) + 'M';
          } else if (abs >= Math.pow(10, 3)) {
            return (value / Math.pow(10, 3)).toFixed(precision) + 'k';
          }
        return value.toString();
      } else {
        return '';
      }
    
  }
}
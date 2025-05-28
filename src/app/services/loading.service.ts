import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading = signal(false);
  private _requestCount = signal(0);

  // Public readonly signals
  readonly isLoading = this._isLoading.asReadonly();
  readonly requestCount = this._requestCount.asReadonly();

  setLoading(loading: boolean): void {
    if (loading) {
      this._requestCount.update(count => count + 1);
    } else {
      this._requestCount.update(count => Math.max(0, count - 1));
    }
    
    // Only show loading if there are active requests
    this._isLoading.set(this._requestCount() > 0);
    
  }
  resetLoading(): void {
    this._requestCount.set(0);
    this._isLoading.set(false);
  }
}
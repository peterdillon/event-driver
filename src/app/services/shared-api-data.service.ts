import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface PredictHQItem {
  id: string;
  predicted_end: string;
  end_local: string
}

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public dataSignal = signal<any[]>([]);
  
  public _items = signal<PredictHQItem[]>([]);
  readonly items = this._items.asReadonly();

  getData() {
    return this.dataSignal();
  }
  setData(data: any) {
    this.dataSignal.set(data);
  }
  // ------------------------------

  // Optional: method to get a specific item by index
  getItemByIndex(index: number) {
    return this.items()[index];
  }
  // Optional: method to get a specific item by id
  getItemById(id: string) {
    return this.items().find(item => item.id === id);
  }


}
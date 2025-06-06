import { Component, Input } from '@angular/core';

export interface CustomPopupData {
  title: string;
  labels: string;
  endtime: string;
}

@Component({
  selector: 'app-custom-popup',
  imports: [],
  template: `
    <div>
      <h4>{{ title }}</h4>
      <p class="popup-label">{{ labels }}</p>
      <p class="popup-end-time">Endtime: {{ endtime }}</p>
    </div>`
})
export class CustomPopupComponent {
  @Input() title: string | undefined;
  @Input() labels: string | undefined;
  @Input() endtime: string | undefined;
}



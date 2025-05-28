import { Component, AfterViewInit, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InitMapService } from './services/init-map.service';
import { EventDriverService, Data } from './services/rideperks.service';
import { MarkerService } from './services/marker.service';
import { LayerService } from './services/layer.service';
import { Event } from './utils/interfaces';
import { CustomDatePipe, RemoveSourced, ShortNumberPipe, IsEmptyPipe } from './utils/pipes'
import { iconDefault } from './services/custom-icon.service';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import * as L from 'leaflet';
import { LoadingService } from './services/loading.service';
import { Subscription } from 'rxjs';
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RemoveSourced, CustomDatePipe, 
    ShortNumberPipe, IsEmptyPipe, NzSplitterModule, 
    NzCardModule, NzIconModule, NzSpinModule, NzButtonModule,
    NzFloatButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit, OnInit {
  
  post: any;
  data = signal<Data[]>([]);
  events = [];
  results: Event[] = [];
  now = new Date().toISOString();

  constructor(
    private http: HttpClient,
    private initMapService: InitMapService,
    private eventDriverService: EventDriverService,
    private markerService: MarkerService,
    private layerService: LayerService,
    public loadingService: LoadingService ) { }

    ngOnInit(): void {
      this.fetchData();
      // this.getPredictHQ();
    }

    fetchData() {
      this.eventDriverService.getData().subscribe(data => { 
        this.data.set(data);
        console.log(data);
      });
    }

    private getNextDay(dateString: string): string {
      const date = new Date(dateString);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    }

    getPredictHQ() {
      const today = new Date().toISOString().split('T')[0];
      const nextDay = this.getNextDay(today);
      const params = new HttpParams()
        .set('within', '10km@36.1699,-115.1398')
        .set('active.gte', today)
        .set('active.lte', nextDay)
        .set('active.tz', 'America/Los_Angeles')
        .set('within', '5mi@36.15232563533872,-115.15762293568056')
        .set('radius_unit', 'mi')
        .set('rank.gte', '20')
        .set('state', 'active,predicted')
        .set('category', 'concerts,sports,festivals,conferences,expos,performing-arts,community,politics')
        .set('limit', '50')
        .set('start.gte', this.now)
        .set('sort', 'phq_attendance,predicted_end');

      this.eventDriverService.getEvents(params).subscribe(response => {
        this.events = response;
        console.log(this.events);
        for (let key in this.events) {
          if (key === "results") {
              this.results = this.events[key];
              console.log(this.results);
          }
        }
      });
    }

  ngAfterViewInit(): void {
    this.initMapService.initMap();
    const map = this.initMapService.getMap();
    // this.markerService.makeCapitalMarkers(map);
    // this.markerService.makePulsingMarker(map);
    this.layerService.createLayer(map);

    // --------- custom car icon ----------
    const carIcon = L.icon({
        iconUrl: './assets/car-top.png',
        iconSize:     [33, 15],
        iconAnchor:   [21, 10], 
        popupAnchor:  [5, -13]
    });
    L.marker([36.12056, -115.16139], {icon: carIcon}).addTo(map).bindPopup("Driver 1");;
    // --------- end custom car icon ------
    
    // --------- add location ----------
    L.control.locate({
      position: 'bottomright',
      flyTo: true
    }).addTo(map);
  }
  
}

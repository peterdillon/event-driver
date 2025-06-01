import { Component, AfterViewInit, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InitMapService } from './services/init-map.service';
import { EventDriverService, Data } from './services/eventdriver.service';
import { MarkerService } from './services/marker.service';
import { LayerService } from './services/layer.service';
import { Event } from './utils/interfaces';
import { SharedDataService } from './services/shared-api-data.service';
import { CustomEndTimePipe, RemoveSourced, ShortNumberPipe, IsEmptyPipe } from './utils/pipes'
import { iconDefault } from './services/custom-icon.service';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TimerComponent } from './timer.component';
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import * as L from 'leaflet';
import { LoadingService } from './services/loading.service';
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RemoveSourced, NzMenuModule,
    ShortNumberPipe, IsEmptyPipe, NzSplitterModule,
    NzCardModule, NzIconModule, NzSpinModule, NzButtonModule,
    NzFloatButtonModule, TimerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit, OnInit {
  
  post: any;
  data = signal<Data[]>([]);
  events = [];
  emptyEvents: boolean | undefined;
  results: Event[] = [];
  now = new Date().toISOString();
  capacity = 'capacity';
  endTime = 'endTime';
  categories = ['conferences','expos','concerts','sports','festivals','performing-arts','community','politics'];

  constructor(
    private http: HttpClient,
    private initMapService: InitMapService,
    private eventDriverService: EventDriverService,
    private markerService: MarkerService,
    private layerService: LayerService,
    public loadingService: LoadingService,
    public sharedDataService: SharedDataService ) { }

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData() {
      this.eventDriverService.getData().subscribe(data => { 
        this.data.set(data);
      });
    }

    private getNextDay(dateString: string): string {
      const date = new Date(dateString);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split('T')[0];
    }


    setSortParameter(sortParam: string): void {
      const setCategory = '';
      this.getPredictHQ(sortParam, setCategory);
    }
    setCategory(categoryName: string): void {
      const sortParam = '';
      this.getPredictHQ(sortParam, categoryName);
    }
    joinCategories() {
      return this.categories.join(',')
    }

    getPredictHQ(sort:string, category:string) {

      sort === '' ? sort = 'relevance' : sort = sort;
      category === '' ? category = this.joinCategories() : category = category;

      const today = new Date().toISOString().split('T')[0];
      const nextDay = this.getNextDay(today);
      const params = new HttpParams()
        .set('active.gte', today)
        .set('active.lte', nextDay)
        .set('active.tz', 'America/Los_Angeles')
        .set('within', '8mi@36.15232563533872,-115.15762293568056')
        .set('radius_unit', 'mi')
        .set('rank.gte', '20')
        .set('state', 'active,predicted')
        .set('category', category)
        .set('limit', '20')
        .set('start.gte', this.now)
        .set('sort', sort);

      this.eventDriverService.getEvents(params).subscribe(response => {
          this.events = response;
          for (let key in this.events) {
            if (key === "results") {
                this.results = this.events[key];
                console.log(this.results);
                if (this.results.length === 0) {
                  this.emptyEvents = true;
                } 
                // Set in shared-api-data.service
                this.sharedDataService.setData(this.results);
                this.addPins();
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
      L.marker([36.12056, -115.16139], {icon: carIcon}).addTo(map).bindPopup("Driver 1");
      // --------- end custom car icon ------
      
      // --------- add location ----------
      L.control.locate({
        position: 'bottomright',
        flyTo: true
      }).addTo(map);
      map.locate({setView: true, maxZoom: 16});
    }

    addPins(): void {
      const currentData = this.sharedDataService.getData();
      const map = this.initMapService.getMap();
      const customOptions = {
        'maxWidth': 200,
        'className' : 'popupCustom'
      }
      currentData.map((item: any, index: number) => {
        const eventIcon = L.icon({
          iconUrl: './assets/map-pin-orange.svg',
          iconSize:     [20, 25],
          iconAnchor:   [10, 12], 
          popupAnchor:  [1, -5]
        });
        L.marker([item.location[1], item.location[0]], {icon: eventIcon}).addTo(map).bindPopup(item.title, customOptions);

      });
    }

    openGoogleMaps(location_0: number, location_1: number) {
      const url = `https://www.google.com/maps/dir/Current+Location/${location_0},${location_1}`;
      window.open(url, '_blank');
    }

    flyToPin(location_0: number, location_1: number): void {
      const map = this.initMapService.getMap();
      map.flyTo([location_0, location_1], 17, { duration: 2 });
    }
  
}

import { Component, AfterViewInit, signal, OnInit, Inject, ViewChild, ViewContainerRef, Injector } from '@angular/core';
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
import { TimerComponent } from './timer/timer.component';
import { DatePipe } from '@angular/common';
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import  L from 'leaflet';
import { LoadingService } from './services/loading.service';
L.Marker.prototype.options.icon = iconDefault;
import { CustomPopupComponent, CustomPopupData } from './custom-popup/custom-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [DatePipe, CustomPopupComponent],
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
  
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;
  post: any;
  data = signal<Data[]>([]);
  events = [];
  emptyEvents: boolean | undefined;
  results: Event[] = [];
  now = new Date().toISOString();
  categories = ['conferences','expos','concerts','sports','festivals','performing-arts','community','politics'];
  customPopup = {
        'maxWidth': 200,
        'className' : 'popupCustom'
      };
  carIcon = L.icon({
      iconUrl: './assets/car-top.png',
      iconSize:     [35, 16],
      iconAnchor:   [20, 8], 
      popupAnchor:  [5, -13]
  });
  customMarker: L.Marker<any> | null = null;
  eventIcon = L.icon({
      iconUrl: './assets/map-pin-orange.svg',
      iconSize:     [20, 25],
      iconAnchor:   [10, 12], 
      popupAnchor:  [1, -5]
  });

  constructor(
    private http: HttpClient,
    private initMapService: InitMapService,
    private eventDriverService: EventDriverService,
    private markerService: MarkerService,
    private layerService: LayerService,
    public loadingService: LoadingService,
    public sharedDataService: SharedDataService,
    @Inject(DatePipe) private datePipe: DatePipe,
    private injector: Injector ) { }

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
      // --------- add location button ----------
      L.control.locate({
        position: 'bottomright',
        flyTo: true
      }).addTo(map);
      map.locate({ 
        setView: false, 
        maxZoom: 16 
      });
      map.on('locationfound', (e: L.LocationEvent) => this.addCustomMarker.call(this, e));
      map.on('locationerror', this.onLocationError.bind(this));
      map.on('locatedeactivate', this.removeCustomMarker.bind(this));
    }

    addCustomMarker(e: L.LocationEvent) {
      const map = this.initMapService.getMap();
      const radius = e.accuracy / 2;
      if (this.customMarker) {
          map.removeLayer(this.customMarker);
      }
      this.customMarker = L.marker(e.latlng, {icon: this.carIcon}).addTo(map)
      // .bindPopup("You are within " + radius + " meters of this point.", this.customPopup).openPopup();
    }

    removeCustomMarker() {
      const map = this.initMapService.getMap();
      if (this.customMarker) {
          map.removeLayer(this.customMarker);
          this.customMarker = null; 
      }
    }

    // --------------------------
    onLocationError(e: any) {
      alert(e.message);
    }

    addPins(): void {
      const currentData = this.sharedDataService.getData();
      const map = this.initMapService.getMap();
      currentData.map((item: any, index: number) => {
        const labels = item.phq_labels && item.phq_labels.map((m: any) => {
          for (let key in m) {
            if (key === "label") {
              return `${m[key]}`;
            }
          }
          return 'No label provided';
        }).join(', ') || 'No label provided';
        const endtime = this.datePipe.transform(item.end_local, 'h:mm a') || '';
        const showInfo = this.compilePopup(CustomPopupComponent, {
          title: item.title,
          labels: labels,
          endtime: endtime
        });
        L.marker([item.location[1], item.location[0]], {icon: this.eventIcon}).addTo(map).bindPopup(showInfo, this.customPopup);
      });
    }

    compilePopup<T extends CustomPopupData>(componentType: any, data: T): HTMLElement {
      const componentRef = this.popupContainer.createComponent(componentType);
      // Cast to the specific component type
      const instance = componentRef.instance as CustomPopupComponent; 
      instance.title = data.title;
      instance.labels = data.labels;
      instance.endtime = data.endtime;
      // Trigger change detection
      componentRef.changeDetectorRef.detectChanges();
      // Get the DOM element and clone it
      const originalElement = componentRef.location.nativeElement;
      const clonedElement = originalElement.cloneNode(true) as HTMLElement;
      // Clean up the original component since we're using a clone
      componentRef.destroy();
      return clonedElement;
    }

    openGoogleMaps(location_0: number, location_1: number) {
      const url = `https://www.google.com/maps/dir/Current+Location/${location_0},${location_1}`;
      window.open(url, '_blank');
    }

    flyToEvent(location_0: number, location_1: number): void {
      const map = this.initMapService.getMap();
      map.flyTo([location_0, location_1], 17, { duration: 2 });
    }
  
}

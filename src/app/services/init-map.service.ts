import { Injectable  } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class InitMapService {
    
    private accessToken = 'EZ0K9Kcue05uXQXUAymHu5hMJHeD2lAqwBGxO2p66yJzUFqWiUpyp8UqyvOMKrXi';
    private map!: L.Map;
    private the_sphere = {
        lat: 36.12056,
        lon: -115.16139
    }

    constructor() {}
    
    initMap() {
        if (this.map) { this.map.remove(); }
        this.map = L.map('map', {
            center: [this.the_sphere.lat, this.the_sphere.lon],
            zoom: 16
        });
        const tiles = L.tileLayer('https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=' + this.accessToken, {
            attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 22
        });
        tiles.addTo(this.map);
    }

    getMap(): L.Map {
        return this.map;
    }

}
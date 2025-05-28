import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {

    sphere: string = './assets/data.geojson';

    constructor( private http: HttpClient ) { }

    makePulsingMarker(map: L.Map) { 
        const generatePulsatingMarker = function (radius: number, color: string) {
            const cssStyle = `
            width: ${radius}px;
            height: ${radius}px;
            background: ${color};
            color: ${color};
            box-shadow: 0 0 0 ${color};
            `
            return L.divIcon({
                html: `<span style="${cssStyle}" class="pulse"/>`,
                className: ''
            })
        }
        const pulsatingIcon = generatePulsatingMarker(10, 'red');
        L.marker([36.12056,  -115.16139], {icon: pulsatingIcon}).addTo(map);
    }

    // ------------------------
    makeCapitalMarkers(map: L.Map) {
        this.http.get(this.sphere).subscribe((res: any) => {
            for (const c of res.features) {
                const lon = c.geometry.coordinates[0];
                const lat = c.geometry.coordinates[1];
                L.marker([lon, lat]).addTo(map);
                L.circleMarker([lon, lat],{
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.3,
                    radius: 60
                }).addTo(map);
            }            
        });
    }
  
}

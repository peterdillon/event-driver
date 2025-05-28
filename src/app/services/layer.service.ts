import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class LayerService {

    constructor( private http: HttpClient ) { }

    createLayer(map: L.Map) {
        var olered = L.marker([36.11424951085291, -115.1724863473652]).bindPopup('Ole Red'),
            dennys    = L.marker([36.12099436075287, -115.17181948889002]).bindPopup('Dennys');
        var places = L.layerGroup([olered, dennys]);
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        });
        var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});
        
        // custimize layer menu item
        var baseMaps = {
            "OpenStreetMap": osm,
            "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
        };
        var overlayMaps = {
            "Places": places
        };
        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
        var mgm_grand = L.marker([36.10253, -115.167792]).bindPopup('MGM Grand'),
            bellagio = L.marker([36.112625,-115.176704]).bindPopup('Bellagio');
        var hotels = L.layerGroup([bellagio, mgm_grand]);
        var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        });

        layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
        layerControl.addOverlay(hotels, "Hotels");

    }
}
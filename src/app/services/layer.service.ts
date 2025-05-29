import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class LayerService {

    private accessToken = 'EZ0K9Kcue05uXQXUAymHu5hMJHeD2lAqwBGxO2p66yJzUFqWiUpyp8UqyvOMKrXi';

    constructor( private http: HttpClient ) { }

    createLayer(map: L.Map) {
        let olered = L.marker([36.11424951085291, -115.1724863473652]).bindPopup('Ole Red');
        let dennys = L.marker([36.12099436075287, -115.17181948889002]).bindPopup('Dennys');
        let places = L.layerGroup([olered, dennys]);
        // -----------
        let mgm_grand = L.marker([36.10253, -115.167792]).bindPopup('MGM Grand');
        let bellagio = L.marker([36.112625,-115.176704]).bindPopup('Bellagio');
        let hotels = L.layerGroup([bellagio, mgm_grand]);

        // ----- map choices layers -----
        var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        });
        var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
        });
        var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        });
        var original =  L.tileLayer('https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=' + this.accessToken, {
            attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 22
        });
        // ----- / maps -----
        
        // customize layer menu item
        var baseMaps = {
            "OpenStreetMap": osm,
            "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
        };

        var overlayMaps = {
            "Places": places
        };
        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

        layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
        layerControl.addBaseLayer(original, "Original");
        layerControl.addOverlay(hotels, "Hotels");

    }
}
import * as L from 'leaflet';

  const iconRetinaUrl = '/assets/marker-icon-2x.png';
  const iconUrl = '/assets/marker-icon.png';
  const shadowUrl = '/assets/marker-shadow.png';
  export const iconDefault = L.icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
 
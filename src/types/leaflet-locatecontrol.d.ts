import 'leaflet.locatecontrol';

declare module 'leaflet' {
  namespace control {
    function locate(): L.Control;
  }
}
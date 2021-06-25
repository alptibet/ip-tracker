import { map } from './viewInitializeMap.js';

export const renderMap = function (lat, lng) {
  const coords = [lat, lng];
  map.flyTo(coords, 16, {
    duration: 2,
  });
  L.marker(coords).addTo(map);
};

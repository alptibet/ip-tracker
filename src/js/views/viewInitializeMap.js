export const map = L.map('map', { zoomControl: false });

export const initializeMap = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    map.setView(coords, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords).addTo(map);
  }

  function error() {
    alert('Geolocation is not allowed on your device');
  }
};

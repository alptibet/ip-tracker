export const renderInfo = function (state) {
  const ipaddress = document.querySelector('.ipaddress');
  const timeZone = document.querySelector('.timezone');
  const isp = document.querySelector('.isp');
  const location = document.querySelector('.location');
  timeZone.textContent = state.timeZone;
  isp.textContent = state.isp;
  location.textContent = state.location;
  ipaddress.textContent = state.ipAddress;
};

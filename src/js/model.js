const APIkey = 'at_fheesH5ez5EDUhR0XFdMNoAxuYoQy';

export const state = {
  ipAddress: '',
  location: '',
  timeZone: '',
  isp: '',
  lat: '',
  lng: '',
};

export const getOwnInfo = async function () {
  try {
    const response = await fetch('http://api.ipify.org/?format=json');
    const resolve = await response.json();
    return resolve.ip;
  } catch (error) {
    alert('Could not get your IP address');
    console.log(error);
  }
};

export const getData = async function (address) {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${APIkey}&ipAddress=${address}`);
    const data = await response.json();
    state.ipAddress = address;
    state.isp = data.isp;
    state.location = data.location.city;
    state.timeZone = data.location.timezone;
    state.lat = data.location.lat;
    state.lng = data.location.lng;
    console.log(data);
  } catch (error) {
    alert('Could not find domain information');
    console.log(error);
  }
};

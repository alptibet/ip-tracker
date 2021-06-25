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
    const response = await fetch('https://api.ipify.org/?format=json');
    const resolve = await response.json();
    return resolve.ip;
  } catch (error) {
    alert('Could not get your IP address');
  }
};

export const getData = async function (address) {
  console.log(address);

  try {
    const regexIp = new RegExp(`^([0-9]{1,3}\.){3}[0-9]{1,3}$`, 'g');
    const search = regexIp.test(address) === true ? 'ipAddress' : 'domain';
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${APIkey}&${search}=${address}`);
    const data = await response.json();
    state.ipAddress = data.ip;
    state.isp = data.isp;
    state.location = data.location.city;
    state.timeZone = data.location.timezone;
    state.lat = data.location.lat;
    state.lng = data.location.lng;
  } catch (error) {
    // alert('Could not find domain information');
    console.error(error);
  }
};

const APIkey = 'at_fheesH5ez5EDUhR0XFdMNoAxuYoQy';

export const state = {
  ipAddress: '',
  location: '',
  timeZone: '',
  isp: '',
  domain: '',
};

export const getOwnInfo = async function () {
  try {
    const response = await fetch('http://api.ipify.org/?format=json');
    const resolve = await response.json();
    state.ipAddress = resolve.ip;
  } catch (error) {
    alert('Could not get your IP address');
    console.log(error);
  }
};

export const getData = async function (address) {
  console.log(address);
  try {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${APIkey}&ipAddress=${address}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert('Could not find domain information');
  }
};

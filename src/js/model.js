const APIkey = 'at_fheesH5ez5EDUhR0XFdMNoAxuYoQy';

export const ipAddress = '';

export const getOwnInfo = async function () {
  try {
    const response = await fetch('http://api.ipify.org/?format=json');
    const resolve = await response.json();
    const addr = resolve.ip;
    setOwnInfo(addr);
  } catch (error) {
    alert('Could not get your IP address');
  }
};

const setOwnInfo = function (addr) {
  console.log(addr);
  ipAddress = addr;
  console.log(ipAddress);
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

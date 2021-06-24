const APIkey = 'at_fheesH5ez5EDUhR0XFdMNoAxuYoQy';

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

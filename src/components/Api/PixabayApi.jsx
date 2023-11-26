import axios from 'axios';

const apiKey = `39664886-734d85d446af9c48bd55da1f3`;
const baseUrl = `https://pixabay.com/api`;

export const getImages = async query => {
  const url = `${baseUrl}/?key=${apiKey}&q=${query}`;
  const resp = await axios.get(url);
  return resp.data.hits;

  //SYMULACJIA DŁUŻSZEGO LOADINGU

  // return new Promise(res => {
  //   setTimeout(async () => {
  //     const url = `${baseUrl}/?key=${apiKey}&q=${query}`;
  //     const resp = await axios.get(url);
  //     res(resp.data.hits);
  //   }, 2000);
  // });

  ///////////////////////////////
};

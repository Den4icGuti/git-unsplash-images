import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_KEY = '0v-Y0VTUOeFHxpZUaPonZ120ZLL2kOVgi6BABaanZJA';

const requestSplash = (query, page) => {
  try {
    const responce = axios.get(
      `/search/photos?query=london&page=1&orientation=squarish&per_page=12&client_id=${API_KEY}`
    );
    return responce;
  } catch (error) {
    return error.message;
  }
};

export default requestSplash;

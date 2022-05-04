import axios from 'axios';

export const fetchImg = (query = '', page, per_page = 12) => {
  try {
    return axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&per_page=${per_page}&orientation=portrait&client_id=0v-Y0VTUOeFHxpZUaPonZ120ZLL2kOVgi6BABaanZJA`
      )
      .then(response => response.data.results);
  } catch (error) {
    return error.message;
  }
};

import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const API_KEY = '52284043-e07dc2496c8ab93aaf5c906d1';
  const END_POINT = '/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(`${BASE_URL}${END_POINT}`, { params }).then(res => {
    return res.data.hits;
  });
}

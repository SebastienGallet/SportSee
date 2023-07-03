import axios from 'axios';

const apiService = axios.create({
  baseURL: '/data/mockeddata.json',
});

export default apiService;

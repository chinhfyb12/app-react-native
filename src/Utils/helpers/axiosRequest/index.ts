import {BaseUrl} from 'App/constants/handleRequest';
import axios from 'axios';

const clientRequest = axios.create({
  baseURL: BaseUrl.dev,
  responseType: 'json',
  timeout: 15 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientRequest.interceptors.request.use(async (config: any) => {
  const accessToken = await localStorage.getItem('AccessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default clientRequest;

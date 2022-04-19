import {BaseUrl} from 'App/constants/handleRequest';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStorageToken} from '../storage';

const clientRequest = axios.create({
  baseURL: BaseUrl.dev,
  responseType: 'json',
  timeout: 15 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientRequest.interceptors.request.use(async (config: any) => {
  const accessToken = await AsyncStorage.getItem('token');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default clientRequest;

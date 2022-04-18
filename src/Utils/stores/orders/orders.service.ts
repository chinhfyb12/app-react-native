import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import {IOrderDto} from './orders.dto';

export function createOrderService(order: IOrderDto) {
  const apiUrl = BaseUrl.dev + Endpoint.orders;

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: apiUrl,
      data: order,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error?.response?.data);
      });
  });
}

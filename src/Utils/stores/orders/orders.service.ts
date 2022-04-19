import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import clientRequest from 'Utils/helpers/axiosRequest';
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

export function getOrdersService() {
  const apiUrl = BaseUrl.dev + Endpoint.orders_own;

  return new Promise((resolve, reject) => {
    clientRequest({
      method: 'get',
      url: apiUrl,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error?.response?.data);
      });
  });
}

export function checkOutOrderService(orderId: string, order: IOrderDto) {
  const apiUrl = BaseUrl.dev + Endpoint.orders + '/' + orderId;
  console.log(apiUrl);

  return new Promise((resolve, reject) => {
    clientRequest({
      method: 'put',
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

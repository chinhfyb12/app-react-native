import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import {IFilterProductsDto} from './products.dto';

export function getProductsService(filterGetProductsDto: IFilterProductsDto) {
  const apiUrl = BaseUrl.dev + Endpoint.products;

  const params: IFilterProductsDto = {
    status: 'active',
  };
  if (filterGetProductsDto?.description) {
    params.description = filterGetProductsDto.description;
  }
  if (filterGetProductsDto?.parent_id) {
    params.parent_id = filterGetProductsDto.parent_id;
  }
  if (filterGetProductsDto?.product_code) {
    params.product_code = filterGetProductsDto.product_code;
  }
  if (filterGetProductsDto?.product_name) {
    params.product_name = filterGetProductsDto.product_name;
  }
  if (filterGetProductsDto?.page) {
    params.page = filterGetProductsDto.page;
  }
  if (filterGetProductsDto?.limit) {
    params.limit = filterGetProductsDto.limit;
  }
  if (filterGetProductsDto?.sortBy) {
    params.sortBy = filterGetProductsDto.sortBy;
  }
  if (filterGetProductsDto?.initial_price_start) {
    params.initial_price_start = filterGetProductsDto.initial_price_start;
  }
  if (filterGetProductsDto?.initial_price_end) {
    params.initial_price_end = filterGetProductsDto.initial_price_end;
  }
  if (filterGetProductsDto?.sale_price_start) {
    params.sale_price_start = filterGetProductsDto.sale_price_start;
  }
  if (filterGetProductsDto?.sale_price_end) {
    params.sale_price_end = filterGetProductsDto.sale_price_end;
  }
  if (filterGetProductsDto?.total_start) {
    params.total_start = filterGetProductsDto.total_start;
  }
  if (filterGetProductsDto?.total_end) {
    params.total_end = filterGetProductsDto.total_end;
  }

  return new Promise((resolve, reject) => {
    axios({
      url: apiUrl,
      method: 'get',
      params,
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error?.response?.data);
      });
  });
}

export function getProductsHomeService() {
  const apiUrl = BaseUrl.dev + Endpoint.products + '/home';

  return new Promise((resolve, reject) => {
    axios({
      url: apiUrl,
      method: 'get',
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error?.response?.data);
      });
  });
}

export function getProductDetailService(id: string) {
  const apiUrl = BaseUrl.dev + Endpoint.products + `/${id}`;

  return new Promise((resolve, reject) => {
    axios({
      url: apiUrl,
      method: 'get',
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error?.response?.data);
      });
  });
}

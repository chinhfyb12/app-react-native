import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import clientRequest from 'Utils/helpers/axiosRequest';
import {IProfileDto} from './profile.dto';

export function getProfileService() {
  const apiUrl = BaseUrl.dev + Endpoint.profile;

  return new Promise((resolve, reject) => {
    clientRequest({
      method: 'get',
      url: apiUrl,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error?.response?.data);
      });
  });
}

export function updateProfileService(updateDto: IProfileDto) {
  const apiUrl = BaseUrl.dev + Endpoint.users;

  return new Promise((resolve, reject) => {
    clientRequest({
      method: 'put',
      url: apiUrl,
      data: updateDto,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error?.response?.data);
      });
  });
}

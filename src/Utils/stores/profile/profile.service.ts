import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import clientRequest from 'Utils/helpers/axiosRequest';

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

import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import {IProfileDto} from '../profile/profile.dto';

export function registerService(user: IProfileDto) {
  const apirUrl = BaseUrl.dev + Endpoint.signup;

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: apirUrl,
      data: user,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error?.response?.data);
      });
  });
}

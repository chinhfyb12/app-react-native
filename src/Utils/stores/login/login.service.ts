import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import {ILoginRequestDto} from './login.dto';

export function loginService(loginDto: ILoginRequestDto) {
  const apiUrl = BaseUrl.dev + Endpoint.login;

  return new Promise((resolve, rejects) => {
    axios({
      method: 'post',
      url: apiUrl,
      data: loginDto,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        rejects(error?.respones?.data);
      });
  });
}

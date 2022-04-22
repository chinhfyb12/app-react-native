import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import clientRequest from 'Utils/helpers/axiosRequest';
import {IChat} from './chat.dto';

export function getChatService(id: string) {
  const apiUrl = BaseUrl.dev + Endpoint.chats + `/${id}`;

  return new Promise((resolve, rejects) => {
    clientRequest({
      url: apiUrl,
      method: 'GET',
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        rejects(err?.response?.data);
      });
  });
}

export function addChatService(data: IChat) {
  const apiUrl = BaseUrl.dev + Endpoint.chats;

  return new Promise((resolve, rejects) => {
    clientRequest({
      url: apiUrl,
      method: 'POST',
      data,
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        rejects(err?.response?.data);
      });
  });
}

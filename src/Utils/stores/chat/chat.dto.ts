export interface IChat {
  _id?: string;
  room_id: string;
  sender_id: string;
  text: string;
  customer_name?: string;
  customer_avt?: string;
}

export interface IChatState {
  chat: IChat[];
  loading?: boolean;
  error?: any;
  message?: string;
}

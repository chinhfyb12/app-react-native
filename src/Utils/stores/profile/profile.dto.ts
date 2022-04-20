export enum GenderEnum {
  male = 'male',
  female = 'female',
  hidden = 'hidden',
}
export type GenderTypes = 'male' | 'female';
export interface IProfileDto {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  password?: string;
  avt_url?: string;
  gender?: GenderTypes;
  _id?: string;
}
export interface IUpdatePasswordDto {
  prev_pwd: string;
  new_pwd: string;
}

export interface IProfileState {
  loading?: boolean;
  profile?: IProfileDto;
  error?: any;
  message?: string;
}

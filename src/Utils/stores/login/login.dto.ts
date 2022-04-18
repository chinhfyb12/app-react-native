import {IProfileDto} from '../profile/profile.dto';

export interface ILoginDto {
  access_token: string;
  profile?: IProfileDto;
}

export interface ILoginRequestDto {
  phone: string;
  password: string;
}

export interface ILoginState {
  user?: ILoginDto;
  error?: any;
  loading?: boolean;
}

import {IProfileDto} from '../profile/profile.dto';

export interface IRegisterDto {
  access_token: string;
  profile?: IProfileDto;
}
export interface IRegisterState {
  loading?: boolean;
  message?: string;
  error?: any;
  user?: IRegisterDto;
}

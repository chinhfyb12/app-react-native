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
}

export interface IProfileState {
  loading?: boolean;
  profile?: IProfileDto;
  error?: any;
}

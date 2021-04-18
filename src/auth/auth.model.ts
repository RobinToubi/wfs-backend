import { IDto } from '../common/abstract.model';
import { UserRole } from '../user/user.model';

export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IAuthToken {
  token: string;
}

export interface IAuthMeDto extends IDto {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

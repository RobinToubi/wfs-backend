import { ErrorType } from '../common/error/error.model';
import { generateToken } from '../common/token.service';
import { UserModel } from '../user/user.model';
import { userRepository } from '../user/user.repository';
import { IAuthCredentials, IAuthMeDto } from './auth.model';
import { compare } from 'bcrypt';
import {AbstractService} from '../common/abstract.service';

class AuthService extends AbstractService<UserModel> {
  protected  repository = userRepository;

  login(credentials: IAuthCredentials): Promise<string> {
    return this.repository.findByEmail(credentials.email)
      .then((user) => {
        return compare(credentials.password, user.password)
        .then((value) => {
          if (value) {
            return generateToken({
              email: user.email,
              id: user._id,
              role: user.role
            })
          }
          return Promise.reject({ type: ErrorType.invalidCredentials })
        })
      })
  }

  register(user: UserModel): Promise<UserModel> {
    return this.repository.create(user);
  }

  getUser(userId: string): Promise<IAuthMeDto> {
    return this.repository.get(userId);
  }
}

export const authService = new AuthService();

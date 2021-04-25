import { ErrorType } from '../common/error/error.model';
import { generateToken } from '../common/token.service';
import { UserModel } from '../user/user.model';
import { userRepository } from '../user/user.repository';
import { IAuthCredentials, IAuthMeDto } from './auth.model';
import { compare } from 'bcrypt';

class AuthService {

  login(credentials: IAuthCredentials): Promise<string> {
    return userRepository.findByEmail(credentials.email)
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
    return userRepository.create(user);
  }

  getUser(userId: string): Promise<IAuthMeDto> {
    return userRepository.get(userId);
  }
}

export const authService = new AuthService();

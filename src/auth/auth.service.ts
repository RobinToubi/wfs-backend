import { ErrorType } from '../common/error/error.model';
import { generateToken } from '../common/token.service';
import { userRepository } from '../user/user.repository';
import { IAuthCredentials, IAuthMeDto, IAuthToken } from './auth.model';

class AuthService {

  login(credentials: IAuthCredentials): Promise<IAuthToken> {
    return userRepository.findByEmailAndPassword(credentials.login, credentials.pwd)
      .then((user) =>
        generateToken({
          email: user.email,
          id: user.id,
          role: user.role
        }).then(token => ({ token }))
        .catch(error => {
          console.error(error);
          return Promise.reject({ type: ErrorType.invalidCredentials });
        })
      );
  }

  getUser(userId: number): Promise<IAuthMeDto> {
    return userRepository.get(userId);
  }
}

export const authService = new AuthService();

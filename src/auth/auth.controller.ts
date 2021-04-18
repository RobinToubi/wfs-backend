import { NextFunction, Request, Response } from 'express';
import { AuthenticatedRequest } from '../common/authentication.middleware';
import { IAppError } from '../common/error/error.model';
import { UserModel } from '../user/user.model';
import { authService } from './auth.service';

class AuthController {

  login(req: Request, res: Response, next: NextFunction): void {
    const credentials = req.body;
    authService.login(credentials)
      .then(token => res.json({token: token }))
      .catch((err) => {
        next(err)
      });
  }

  me(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
    const userId = req.userToken.id;
    authService.getUser(userId)
      .then(dto => res.json(dto))
      .catch(next);
  }

  register(req: Request, res: Response, next: NextFunction): void {
    const user: UserModel = req.body;
    authService.register(user)
    .then((createdUser) => {
      res.json({ "message": "User created"});
    })
    .catch((err) => {
      const error: IAppError = {
        type: err.code,
        messageParam: err.message
      };
      next(error);
    });
  }
}

export const authController = new AuthController();

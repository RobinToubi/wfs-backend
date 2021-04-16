import { NextFunction, Request, Response } from 'express';
import { AuthenticatedRequest } from '../common/authentication.middleware';
import { authService } from './auth.service';

class AuthController {

  login(req: Request, res: Response, next: NextFunction): void {
    const credentials = req.body;
    authService.login(credentials)
      .then(dto => res.json(dto))
      .catch(next);
  }

  me(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
    const userId = req.userToken.id;
    authService.getUser(userId)
      .then(dto => res.json(dto))
      .catch(next);
  }
}

export const authController = new AuthController();

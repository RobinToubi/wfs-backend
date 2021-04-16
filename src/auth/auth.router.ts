import { NextFunction, Request, Response, Router } from 'express';
import { AuthenticatedRequest, authenticationMiddleware } from '../common/authentication.middleware';
import { authController } from './auth.controller';

export const authRouter = Router();

authRouter.post('/login',
  (req: Request, res: Response, next: NextFunction) => authController.login(req, res, next));

authRouter.get('/me',
  authenticationMiddleware,
  (req: AuthenticatedRequest, res: Response, next: NextFunction) => authController.me(req, res, next))

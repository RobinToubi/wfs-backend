import { NextFunction, Response } from 'express';
import { UserRole } from '../user/user.model';
import { AuthenticatedRequest } from './authentication.middleware';
import { ErrorType } from './error/error.model';

export const authorizationMiddleware = (userRole: UserRole) => (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.userToken.role === userRole) {
    next();
  } else {
    next({ type: ErrorType.missingRole, messageParam: userRole });
  }
};



import { NextFunction, Request, Response } from 'express';
import { ErrorType } from './error/error.model';
import { checkToken, ITokenPayload } from './token.service';

const extractToken = (req: Request): string => {
  return req.headers.authorization?.replace('Bearer ', '');
}

export interface AuthenticatedRequest extends Request {
  userToken: ITokenPayload;
}

export const authenticationMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = extractToken(req);
  if (token) {
    checkToken(token)
      .then(payload => {
        req.userToken = payload;
        next();
      })
      .catch(error => {
        console.error(error);
        next({ type: ErrorType.invalidToken, messageParam: token });
      })
  } else {
    next({ type: ErrorType.missingToken });
  }
}

export const safeAuthenticationMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = extractToken(req);
  if (token) {
    checkToken(token)
      .then(payload => {
        req.userToken = payload;
        next();
      })
      .catch(error => {
        console.error(error);
        next({ type: ErrorType.invalidToken, messageParam: token });
      })
  } else {
    next();
  }
}

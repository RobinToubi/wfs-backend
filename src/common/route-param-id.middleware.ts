import { NextFunction, Request, Response } from 'express';
import { ErrorType, IAppError } from './error/error.model';

export const routeParamIdMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  const id = parseInt(request.params.id);
  if (isNaN(id)) {
    const error: IAppError = { type: ErrorType.resourceIdFormat };
    next(error);
  } else {
    next();
  }
};

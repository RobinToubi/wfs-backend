import { NextFunction, Request, Response } from 'express';
import { ErrorType, IAppError } from './error/error.model';

export const routeNotFoundMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  const error: IAppError = { type: ErrorType.resourceTypeNotFound, messageParam: request.url?.split('/')?.[1] };
  next(error);
};

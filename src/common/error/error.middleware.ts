import { NextFunction, Request, Response } from 'express';
import { ErrorType, IAppError } from './error.model';

export const errorMiddleware = (error: IAppError, request: Request, response: Response, next: NextFunction): void => {
  const statusCode = getStatusCode(error);
  const message = getMessage(error);
  const type = getType(error);
  response.status(statusCode);
  response.json({ type, message });
};

const getStatusCode = (error: IAppError): number => {
  switch (error?.type) {
    case ErrorType.resourceTypeNotFound:
      return 404;
    case ErrorType.invalidCredentials:
    case ErrorType.missingToken:
    case ErrorType.invalidToken:
      return 401;
    case ErrorType.uniqueConstraint:
    case ErrorType.missingRole:
      return 403;
    case ErrorType.unhandledError:
    default:
      return 500;
  }
};

const getMessage = (error: IAppError): string => {
  switch (error?.type) {
    case ErrorType.uniqueConstraint:
      return 'Resource already exists';
    case ErrorType.resourceTypeNotFound:
      return `Resource type ${error.messageParam} does not exist`;
    case ErrorType.invalidCredentials:
      return 'Credentials are invalid';
    case ErrorType.invalidToken:
      return `The token=${error.messageParam} is invalid`
    case ErrorType.missingToken:
      return 'An authentication token is required';
    case ErrorType.missingRole:
      return `Role=${error.messageParam} is required`
    case ErrorType.unhandledError:
    default:
      return 'Unhandled error';
  }
};

const getType = (error: IAppError): ErrorType => {
  return error?.type || ErrorType.unhandledError;
};

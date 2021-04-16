import { ErrorType } from './error.model';
import { PrimaryKeyError } from './repository-error.model';

export const itemErrorHandler = id => error => {
  if (error instanceof PrimaryKeyError) {
    return Promise.reject({ type: ErrorType.resourceIdNotFound, messageParam: id });
  }
  return Promise.reject(error);
};

export enum ErrorType {
  resourceTypeNotFound = 'RESOURCE_TYPE_NOT_FOUND',
  unhandledError = 'UNHANDLED_ERROR',
  invalidCredentials = 'INVALID_CREDENTIALS',
  missingToken = 'MISSING_TOKEN',
  invalidToken = 'INVALID_TOKEN',
  missingRole = 'MISSING_ROLE',
  uniqueConstraint = 11000
}

export interface IAppError {
  type: ErrorType;
  messageParam?: string | number;
}

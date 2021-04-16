import { NextFunction, Request, Response } from 'express';

export const logMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  console.log(`method=${request.method} path=${request.url} content-type=${request.headers['content-type']}`);
  next();
};

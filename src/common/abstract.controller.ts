import { NextFunction, Request, Response } from 'express';
import { AbstractService } from './abstract.service';

export abstract class AbstractController<M> {

  protected abstract service: AbstractService<M>;

  findAll(request: Request, response: Response, next: NextFunction): void {
    this.service.findAll()
      .then(dtos => response.json(dtos))
      .catch(next);
  }

  get(request: Request, response: Response, next: NextFunction): void {
    this.service.get(request.params.id)
      .then(dto => response.json(dto))
      .catch(next);
  }

  create(request: Request, response: Response, next: NextFunction): void {
    this.service.create(request.body)
      .then(item => {
        response.status(201);
        response.json(item);
      })
      .catch(next);
  }

  update(request: Request, response: Response, next: NextFunction): void {
    this.service.update(request.params.id, request.body)
      .then(item => response.json(item))
      .catch(next);
  }

  remove(request: Request, response: Response, next: NextFunction): void {
    this.service.remove(request.params.id)
      .then(() => {
        response.status(204);
        response.json();
      })
      .catch(next);
  }
}

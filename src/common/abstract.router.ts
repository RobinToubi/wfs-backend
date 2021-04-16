import express from 'express';
import { Document, Model } from 'mongoose';
import { UserRole } from '../user/user.model';
import { AbstractController } from './abstract.controller';
import { authenticationMiddleware, safeAuthenticationMiddleware } from './authentication.middleware';
import {  authorizationMiddleware } from './authorization.middleware';
import { routeParamIdMiddleware } from './route-param-id.middleware';

export abstract class AbstractRouter {
  router = express.Router();

  protected abstract controller: AbstractController<any>;

  constructor() {
    this.configure();
  }

  protected configure(): void {
    this.router.get('/', safeAuthenticationMiddleware, (req, res, next) => this.controller.findAll(req, res, next));
    this.router.get('/:id', routeParamIdMiddleware, (req, res, next) => this.controller.get(req, res, next));

    this.router.post('/',
      authenticationMiddleware,
      (req, res, next) => this.controller.create(req, res, next));

    this.router.put('/:id',
      authenticationMiddleware,
      routeParamIdMiddleware,
      (req, res, next) => this.controller.update(req, res, next));

    this.router.delete('/:id',
      authenticationMiddleware,
      authorizationMiddleware(UserRole.admin),
      routeParamIdMiddleware,
      (req, res, next) => this.controller.remove(req, res, next));
  }
}

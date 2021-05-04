import { NextFunction, Request, Response } from 'express';
import { AuthenticatedRequest, authenticationMiddleware } from '../common/authentication.middleware';
import { authController } from './auth.controller';
import {AbstractRouter} from '../common/abstract.router';
import {authorizationMiddleware} from '../common/authorization.middleware';
import {UserRole} from '../user/user.model';

class AuthRouter extends AbstractRouter {
    protected controller = authController;

    protected configure() {
        this.router.get('/',
            authenticationMiddleware,
            authorizationMiddleware(UserRole.admin),
            (req: AuthenticatedRequest, res: Response, next: NextFunction) => this.controller.findAll(req, res, next));
        this.router.get('/me',
            authenticationMiddleware,
            (req: AuthenticatedRequest, res: Response, next: NextFunction) => this.controller.me(req, res, next));
        this.router.get('/:id',
            authenticationMiddleware,
            authorizationMiddleware(UserRole.admin),
            (req: AuthenticatedRequest, res: Response, next: NextFunction) => this.controller.get(req, res, next));

        this.router.post('/',
            authenticationMiddleware,
            authorizationMiddleware(UserRole.admin),
            (req: Request, res: Response, next: NextFunction) => this.controller.create(req, res, next));
        this.router.post('/login',
            (req: Request, res: Response, next: NextFunction) => this.controller.login(req, res, next));
        this.router.post('/register',
            (req: Request, res: Response, next: NextFunction) => this.controller.register(req, res, next));

        this.router.put('/:id',
            authenticationMiddleware,
            authorizationMiddleware(UserRole.admin),
            (req: Request, res: Response, next: NextFunction) => this.controller.update(req, res, next));

        super.configure();
    }
}

export const authRouter = new AuthRouter().router

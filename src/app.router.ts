import express from 'express';
import { authRouter } from './auth/auth.router';
import { characterRouter } from './character/character.router';
import { routeNotFoundMiddleware } from './common/route-not-found.middleware';

export const router = express.Router();
router.use('/characters', characterRouter);
router.use('/auth', authRouter);
router.use(routeNotFoundMiddleware);

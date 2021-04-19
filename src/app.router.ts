import express from 'express';
import { authRouter } from './auth/auth.router';
import { characterRouter } from './character/character.router';
import { routeNotFoundMiddleware } from './common/route-not-found.middleware';
import { movieRouter } from './movie/movie.router';

export const router = express.Router();
router.use('/characters', characterRouter);
router.use('/movies', movieRouter);
router.use('/auth', authRouter);
router.use(routeNotFoundMiddleware);

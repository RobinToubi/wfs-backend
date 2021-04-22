import { NextFunction, Response } from 'express';
import { AbstractController } from '../common/abstract.controller';
import { AuthenticatedRequest } from '../common/authentication.middleware';
import { MovieModel} from './movie.model';
import { movieService } from './movie.service';

class MovieController extends AbstractController<MovieModel> {
  protected service = movieService;

  findAll(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    if (request.query.favorite === 'true') {
      this.service.findAllFavorites(request.userToken.id)
        .then(dtos => response.json(dtos))
        .catch(next);
    } else {
      super.findAll(request, response, next);
    }
  }
}

export const movieController = new MovieController();

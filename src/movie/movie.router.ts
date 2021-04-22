import { AbstractRouter } from '../common/abstract.router';
import { movieController } from './movie.controller';
import { IMovie } from './movie.model';

class MovieRouter extends AbstractRouter {
  protected controller = movieController;

  protected configure() {
    super.configure();
  }
}

export const movieRouter = new MovieRouter().router;

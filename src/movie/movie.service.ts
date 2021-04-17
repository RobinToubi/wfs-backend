import { AbstractService } from '../common/abstract.service';
import { MovieModel, IMovie } from './movie.model';
import { movieRepository } from './movie.repository';

class MovieService extends AbstractService<MovieModel> {
  protected repository = movieRepository;

  findAllFavorites(userId: number): Promise<MovieModel[]> {
    return this.repository.findAllFavorites(userId);
  }
}

export const movieService = new MovieService();

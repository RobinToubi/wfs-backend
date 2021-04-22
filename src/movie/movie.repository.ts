import { AbstractRepository } from '../common/abstract.repository';
import { MovieModel, movieModel} from './movie.model';

class MovieRepository extends AbstractRepository<MovieModel> {
  protected modelClass = movieModel;

  findAllFavorites(userId: string): Promise<MovieModel[]> {
    return this.modelClass.find() as unknown as Promise<MovieModel[]>;
  }
}

export const movieRepository = new MovieRepository();

import { AbstractRepository } from '../common/abstract.repository';
import { MovieDocument, MovieModel, movieModel, IMovie } from './movie.model';

class MovieRepository extends AbstractRepository<MovieModel> {
  protected modelClass = movieModel;

  findAllFavorites(userId: number): Promise<MovieModel[]> {
    return this.modelClass.find() as unknown as Promise<MovieModel[]>;
  }
}

export const movieRepository = new MovieRepository();

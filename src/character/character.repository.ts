import { AbstractRepository } from '../common/abstract.repository';
import { CharacterModel, characterModel} from './character.model';

class CharacterRepository extends AbstractRepository<CharacterModel> {
  protected modelClass = characterModel;

  findAllFavorites(userId: string): Promise<CharacterModel[]> {
    return this.modelClass.find() as unknown as Promise<CharacterModel[]>;
  }
}

export const characterRepository = new CharacterRepository();

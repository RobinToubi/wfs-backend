import { AbstractRepository } from '../common/abstract.repository';
import { CharacterDocument, CharacterModel, characterModel, ICharacter } from './character.model';

class CharacterRepository extends AbstractRepository<CharacterModel> {
  protected modelClass = characterModel;

  findAllFavorites(userId: number): Promise<CharacterModel[]> {
    return this.modelClass.find() as unknown as Promise<CharacterModel[]>;
  }
}

export const characterRepository = new CharacterRepository();

import { AbstractService } from '../common/abstract.service';
import { CharacterModel, ICharacter } from './character.model';
import { characterRepository } from './character.repository';

class CharacterService extends AbstractService<CharacterModel> {
  protected repository = characterRepository;

  findAllFavorites(userId: number): Promise<CharacterModel[]> {
    return this.repository.findAllFavorites(userId);
  }
}

export const characterService = new CharacterService();

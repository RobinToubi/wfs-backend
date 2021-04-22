import { AbstractService } from '../common/abstract.service';
import { CharacterModel } from './character.model';
import { characterRepository } from './character.repository';

class CharacterService extends AbstractService<CharacterModel> {
  protected repository = characterRepository;

  findAllFavorites(userId: string): Promise<CharacterModel[]> {
    return this.repository.findAllFavorites(userId);
  }
}

export const characterService = new CharacterService();

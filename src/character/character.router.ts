import { AbstractRouter } from '../common/abstract.router';
import { characterController } from './character.controller';
import { ICharacter } from './character.model';

class CharacterRouter extends AbstractRouter {
  protected controller = characterController;

  protected configure() {
    super.configure();
  }
}

export const characterRouter = new CharacterRouter().router;

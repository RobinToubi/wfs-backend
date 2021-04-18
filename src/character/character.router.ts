import { AbstractRouter } from '../common/abstract.router';
import { characterController } from './character.controller';

class CharacterRouter extends AbstractRouter {
  protected controller = characterController;

  protected configure() {
    super.configure();
  }
}

export const characterRouter = new CharacterRouter().router;

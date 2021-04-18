import { NextFunction, Response } from 'express';
import { AbstractController } from '../common/abstract.controller';
import { AuthenticatedRequest } from '../common/authentication.middleware';
import { CharacterModel } from './character.model';
import { characterService } from './character.service';

class CharacterController extends AbstractController<CharacterModel> {
  protected service = characterService;

  findAll(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    if (request.query.favorite === 'true') {
      this.service.findAllFavorites(request.userToken.id)
        .then(dtos => response.json(dtos))
        .catch(next);
    } else {
      super.findAll(request, response, next);
    }
  }
}

export const characterController = new CharacterController();

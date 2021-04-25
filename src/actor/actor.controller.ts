import { AbstractController } from "../common/abstract.controller";
import { ActorModel } from "./actor.model";
import { actorService } from "./actor.service";

class ActorController extends AbstractController<ActorModel> {
    protected service = actorService;
}

export const actorController = new ActorController();
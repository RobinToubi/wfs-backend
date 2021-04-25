import { AbstractService } from "../common/abstract.service";
import { ActorModel } from "./actor.model";
import { actorRepository } from "./actor.repository";

class ActorService extends AbstractService<ActorModel> {
    protected repository = actorRepository;
}

export const actorService = new ActorService();
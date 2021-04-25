import { AbstractRepository } from "../common/abstract.repository";
import { actorModel, ActorModel } from "./actor.model";

class ActorRepository extends AbstractRepository<ActorModel> {
    protected modelClass = actorModel;
}

export const actorRepository = new ActorRepository();
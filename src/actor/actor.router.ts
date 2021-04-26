import { AbstractRouter } from "../common/abstract.router";
import { actorController } from "./actor.controller";

class ActorRouter extends AbstractRouter {
    protected controller = actorController;

    protected configure() {
        super.configure();
    }
}

export const actorRouter = new ActorRouter().router;
import { Container } from "inversify";
import { UserActions } from "./modules/users/actions/user-actions";
import { UserController } from "./modules/users/controllers/user-controller";
import { UserRepository } from "./modules/users/repositories/user-repository";
import { UserService } from "./modules/users/services/user-service";

const globalDependencies = new Container();
globalDependencies.bind<UserRepository>(UserRepository).toSelf();
globalDependencies.bind<UserActions>(UserActions).toSelf();
globalDependencies.bind<UserService>(UserService).toSelf();
globalDependencies.bind<UserController>(UserController).toSelf();
export default globalDependencies;

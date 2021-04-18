import { AbstractRepository } from '../common/abstract.repository';
import { userModel, UserModel } from './user.model';

class UserRepository extends AbstractRepository<UserModel> {
  protected modelClass = userModel;

  findByEmail(email: string): Promise<UserModel> {
    return this.modelClass.findOne({ email: email }) as unknown as Promise<UserModel>;
  }
}

export const userRepository = new UserRepository();

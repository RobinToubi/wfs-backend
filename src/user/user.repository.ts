import { AbstractRepository } from '../common/abstract.repository';
import { ModelNotFoundError } from '../common/error/repository-error.model';
import { IUser, UserDocument, userModel, UserModel } from './user.model';
import bcrypt from 'bcrypt';

class UserRepository extends AbstractRepository<UserModel> {
  protected modelClass = userModel;

  findByEmailAndPassword(email: string, password: string): Promise<UserModel> {
    return this.modelClass.findOne({ email: email })
      .then((user) => {
      if (!user) {
        throw new ModelNotFoundError();
      }

       bcrypt.compare(password, user.password).then((result) => {
        if (result) return user;
        else throw new Error();
      });}) as Promise<UserModel>;
  }
}

export const userRepository = new UserRepository();

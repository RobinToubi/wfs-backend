import { PrimaryKeyError } from './error/repository-error.model';

export abstract class AbstractRepository<M> {
  protected abstract modelClass: any;

  findAll(): Promise<M[]> {
    return this.modelClass.find();
  }

  get(id: string): Promise<M> {
    return this.modelClass.findOne({ _id: id }).then((res) => {
      if (!res) {
        throw new PrimaryKeyError();
      }else return res;
    });
  }

  create(model: M): Promise<M> {
    return this.modelClass.create(model);
  }

  update(id: string, model: M): Promise<M> {
    return this.modelClass.findByIdAndUpdate(id, model);
  }

  remove(id: string): Promise<void> {
    return this.modelClass.findByIdAndRemove(id)
      .then((affectedRowsCount) => {
        if (!affectedRowsCount) {
          throw new PrimaryKeyError();
        }
      });
  }
}

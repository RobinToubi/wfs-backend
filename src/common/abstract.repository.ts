import { Document, Schema } from 'mongoose';
import { Model } from 'mongoose';
import { PrimaryKeyError } from './error/repository-error.model';

export abstract class AbstractRepository<M> {
  protected abstract modelClass: any;

  findAll(): Promise<M[]> {
    return this.modelClass.find();
  }

  get(id: number): Promise<M> {
    return this.modelClass.findById(id, { rejectOnEmpty: true }) as unknown as Promise<M>;
  }

  create(model: M): Promise<M> {
    return this.modelClass.create(model) as unknown as Promise<M>;
  }

  update(id: number, model: M): Promise<M> {
    return this.modelClass.findByIdAndUpdate(id, model) as unknown as Promise<M>;
  }

  remove(id: number): Promise<void> {
    return this.modelClass.findByIdAndRemove(id)
      .then((affectedRowsCount) => {
        if (!affectedRowsCount) {
          throw new PrimaryKeyError();
        }
      });
  }
}

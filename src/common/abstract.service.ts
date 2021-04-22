import { Document, Model } from 'mongoose';
import { AbstractRepository } from './abstract.repository';

export abstract class AbstractService<M> {
  protected abstract repository: AbstractRepository<M>;

  findAll(): Promise<M[]> {
    return this.repository.findAll();
  }

  get(id: string): Promise<M> {
    return this.repository.get(id);
  }

  create(data: M): Promise<M> {
    return this.repository.create(data);
  }

  update(id: string, data: M): Promise<M> {
    return this.repository.update(id, data);
  }

  remove(id: string): Promise<void> {
    return this.repository.remove(id);
  }
} 

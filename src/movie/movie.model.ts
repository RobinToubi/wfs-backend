import { Document, model, Model, Schema } from 'mongoose';
import { IModel } from '../common/abstract.model';

// Schema
const MovieSchema = new Schema<MovieDocument, MovieModel>({
  title: {
    type: String,
    required: true
  },
  year: Date,
})


export interface IMovie extends IModel {
  title: string;
  year: Date;
}



interface MovieBaseDocument extends IMovie, Document {
  id: number;
}

// Export this for strong typing
export interface MovieDocument extends MovieBaseDocument {}

// For model
export interface MovieModel extends Model<MovieDocument> {}

export const movieModel = model<MovieDocument, MovieModel>("Movie", MovieSchema)
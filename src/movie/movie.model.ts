import { Document, model, Model, Schema } from 'mongoose';
import { IModel } from '../common/abstract.model';

// Schema
const MovieSchema = new Schema<MovieDocument, MovieModel>({
  title: {
    type: String,
    required: true
  },
  year: Number,
  characters: [],
  genre: String,
  duration: Number,
  affiche: String,
  preview: String,
  realisator: String,
})


export interface IMovie extends IModel {
  title: string;
  year: number;
  characters: [];
  genre: string;
  duration: number;
  affiche: string;
  preview: string;
  realisator: string;
}



interface MovieBaseDocument extends IMovie, Document {
  id: string;
}

// Export this for strong typing
export interface MovieDocument extends MovieBaseDocument {}

// For model
export interface MovieModel extends Model<MovieDocument> {}

export const movieModel = model<MovieDocument, MovieModel>("Movie", MovieSchema)
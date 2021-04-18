import { Document, model, Model, Schema } from 'mongoose';
import { IModel } from '../common/abstract.model';

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
  HelicoptereDeCombat = "Helicoptere de combat"
}

// Schema
const CharacterSchema = new Schema<CharacterDocument, CharacterModel>({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  nickname: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  birthYear: {
    type: Number,
    default: new Date().getFullYear()
  },
  gender: {
    type: String,
    enum: Gender,
    default: Gender.HelicoptereDeCombat
  }
})

export interface ICharacter extends IModel {
  firstName: string;
  lastName: string;
  birthYear: Date;
  nationality: string;
  gender: Gender;
  nickname: string;
}

interface CharacterBaseDocument extends ICharacter, Document {
  id: number;
  fullname: string;
  getGender(): string;
}

// Export this for strong typing
export interface CharacterDocument extends CharacterBaseDocument {}

// For model
export interface CharacterModel extends Model<CharacterDocument> {}

// Virtuals
CharacterSchema.virtual("fullName").get(function(this: CharacterBaseDocument) {
  return this.firstName + this.lastName
})

// Methods
CharacterSchema.methods.getGender = function(this: CharacterBaseDocument) {
  return this.gender
}

export const characterModel = model<CharacterDocument, CharacterModel>("Character", CharacterSchema)
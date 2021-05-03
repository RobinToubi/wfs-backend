import { Document, model, Model, Schema } from 'mongoose';
import { IModel } from '../common/abstract.model';
import { hash } from 'bcrypt';

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
  HelicoptereDeCombat = "Helicoptere de combat"
}

export enum UserRole {
  member = 'MEMBER',
  admin = 'ADMIN'
}

// Schema
const UserSchema = new Schema<UserDocument, UserModel>({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    unique: true,
    lowercase: true
  },
  birthDate: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: Gender,
    default: Gender.HelicoptereDeCombat,
  },
  role: {
    type: String,
    enum: UserRole,
    default: UserRole.member
  }
})


export interface IUser extends IModel {
  firstName: string;
  lastName: string;
  username: string;
  birthDate: Date;
  email: string;
  password: string;
  gender: Gender;
  role: UserRole;
}



interface UserBaseDocument extends IUser, Document {
  _id: string;
  fullname: string;
  getGender(): string;
}

// Export this for strong typing
export interface UserDocument extends UserBaseDocument {}

// For model
export interface UserModel extends Model<UserDocument>, IUser {}

UserSchema.pre<UserDocument>("save", function(next) {
  if (this.isModified("password")) {
    hash(this.password, 10).then((hashedPassword) => {
      this.password = hashedPassword;
      next();
    })
  }
});

// Virtuals
UserSchema.virtual("fullName").get(function(this: UserBaseDocument) {
  return this.firstName + this.lastName
})

// Methods
UserSchema.methods.getGender = function(this: UserBaseDocument) {
  return this.gender
}

export const userModel = model<UserDocument, UserModel>("User", UserSchema)

import { Document, model, Model, Schema } from 'mongoose';
import { IModel } from '../common/abstract.model';
import { hash } from 'bcrypt';

enum Gender {
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
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: Gender,
    default: Gender.HelicoptereDeCombat,
    required: true
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
  birthDate: Date;
  nationality: string;
  gender: Gender;
  password: string;
  email: string;
  role: UserRole;
}



interface UserBaseDocument extends IUser, Document {
  id: number;
  fullname: string;
  getGender(): string;
}

// Export this for strong typing
export interface UserDocument extends UserBaseDocument {
  test: string;
}

// For model
export interface UserModel extends Model<UserDocument>, IUser {
}

UserSchema.pre<UserDocument>("save", function(next) {
  if (this.isModified("password")) {
    hash(this.password, 10).then((hashedPassword) => {
      this.password = hashedPassword;
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

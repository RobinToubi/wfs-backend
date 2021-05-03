import { Document, model, Model, Schema } from "mongoose";
import { IModel } from "../common/abstract.model";
import { Gender } from "../user/user.model";

const ActorSchema = new Schema<ActorDocument, ActorModel>({
    firstName: String,
    lastName: String,
    birthDate: {
        type: Date,
    },
    nationality: String,
    nickname: String,
    gender: {
        type: String,
        enum: Gender,
        default: Gender.HelicoptereDeCombat
    },
    pictures: {
        type: String
    }

}, { toJSON: { virtuals: true }});

export interface IActor extends IModel {
    firstName: string;
    lastName: string;
    birthDate: Date;
    nationality: string;
    gender: Gender;
    nickname: string;
    pictures: string;
}
 
interface ActorBaseDocument extends IActor, Document {
    _id: string;
    fullName: string;
}

export interface ActorDocument extends ActorBaseDocument {}

export interface ActorModel extends Model<ActorDocument> {}

ActorSchema.virtual("fullName").get(function(this: ActorBaseDocument) {
    return this.firstName + ' ' + this.lastName;
});

export const actorModel = model<ActorDocument, ActorModel>("Actor", ActorSchema);
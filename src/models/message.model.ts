import { Document, Schema } from "mongoose";

export interface IMessage extends Document {
  content: string;
  createdAt: Date;
}

export const messageSchema: Schema<IMessage> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});


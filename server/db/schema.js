import mongoose from 'mongoose';
const { Schema } = mongoose;

export const commentsSchema = new Schema({
  author: { type: String, default: "Anonymous User" },
  comment: String,
  date: { type: Date, default: Date.now }
})
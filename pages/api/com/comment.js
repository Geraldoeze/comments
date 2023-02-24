import { initMongoose } from "../../../lib/mongoose";

import Comment from "../../../models/Comments";

export async function findAllComments() {
  return Comment.find().exec();
}


export default async function handler(req, res) {
    await initMongoose();
    res.status(200).json({ name: "John Doe" });
  }
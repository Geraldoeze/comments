import { initMongoose } from "../../../lib/mongoose";
import Comment from "../../../models/Comments";

export async function findAllComments() {
  return Comment.find().exec();
}

export default async function handler(req, res) {
  await initMongoose();
  res.status(201).json(await findAllComments());

  if (req.method === "POST") {
    const { ide, content, user, replies, score, createdAt } = req.body;
    const newComment = new Comment({
      ide: ide,
      content: content,
      createdAt: createdAt,
      score: score,
      user: user,
      replies: replies,
    });
    try {
      await newComment.save();
      res.status(201).json({
        message: "Comment Added",
        comments: newComment,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 501;
      }
    }
  } 
  if (req.method === 'PATCH') {
    
    const { id, content, createdAt} = req.body
    const Updatedcomment = await Comment.findById(id);
    if (!Updatedcomment) {
    const error = new Error('Could not find comment.')
    error.statusCode = 404;
    throw error;
    }
    try {
    Updatedcomment.content = content;
    Updatedcomment.createdAt = createdAt;
    const result = await Updatedcomment.save();
    res.status(201).json({message: 'Updated comment', comment: result})
    } catch (err) {
      if(!err.statusCode) { err.statusCode = 501}
    }
  }

  if (req.method === 'PUT') {
    const score = req.body.score;
    const id = req.body.id;
    try {
    const updatescore = await Comment.findById(id)
    if (!updatescore) {
      const error = new Error('Could not find this User.')
      error.statusCode = 404;
      throw error;
      }
    updatescore.score = score;
    await updatescore.save(); 
    res.status(201).json({message: 'Score updated'})
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
    }
  }


}

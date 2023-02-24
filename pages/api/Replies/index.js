import next from "next";
import { initMongoose } from "../../../lib/mongoose";
import Replies from "../../../models/Replies";

export async function findAllReplies() {
  return Replies.find().exec();
}

export async function handler(req, res) {
  await initMongoose();
  res.status(201).json({mess: 'Yonda'});
  // res.status(201).json(await findAllReplies());
  

  // if (req.method === "POST") {
  //   const { ide, content, user, replyingTo, score, createdAt } = req.body;
    
  //   const newReply = new Replies({
  //     ide: ide,
  //     content: content,
  //     createdAt: createdAt,
  //     score: score,
  //     replyingTo: replyingTo,
  //     user: user,
  //   });
  //   try {
  //     await newReply.save();
  //     res.status(201).json({
  //       message: "Reply added",
  //       replies: newReply,
  //     });
  //   } catch (err) {
  //     if (!err.statusCode) {
  //       err.statusCode = 500;
  //     }
  //   }
  // }
  // if (req.method === 'PATCH') {
  //   const { id, content, createdAt} = req.body
  //   const Updatedreply = await Replies.findById(id);
  //   if (!Updatedreply) {
  //   const error = new Error('Could not find reply.')
  //   error.statusCode = 404;
  //   throw error;
  //   }
  //   try {
  //   Updatedreply.content = content;
  //   Updatedreply.createdAt = createdAt;
  //   const result = await Updatedreply.save();
  //   res.status(201).json({message: 'Updated reply', reply: result})
  //   } catch (err) {
  //     if(!err.statusCode) { err.statusCode = 501}
  //   }
  // }

  // if (req.method === 'PUT') {
  //   const score = req.body.score;
  //   const id = req.body.id;

  //   try {
  //   const updatescore = await Replies.findById(id)
  //   if (!updatescore) {
  //     const error = new Error('Could not find this User.')
  //     error.statusCode = 404;
  //     throw error;
  //     }
  //   updatescore.score = score;
  //   await updatescore.save(); 
  //   res.status(201).json({message: 'Score updated'})
  //   } catch (err) {
  //     if (!err.statusCode) {
  //       err.statusCode = 500;
  //     }
  //   }
  // }

 
}

export default handler;

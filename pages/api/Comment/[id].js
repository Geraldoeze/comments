import { initMongoose } from "../../../lib/mongoose";
import Comment from "../../../models/Comments";

export default async function handler(req, res) {
    await initMongoose();
    if (req.method === 'DELETE') {
        const id = req.url?.split('/')[3]
        const deleteComment = await Comment.findByIdAndDelete(id);
        if (!deleteComment) {
        const error = new Error('Could not find comment.')
        error.statusCode = 404;
        throw error;
        }
        res.status(201).json({message: 'Comment Deleted'})
      }
}
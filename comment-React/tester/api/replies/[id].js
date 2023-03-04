import { initMongoose } from "../../../lib/mongoose";
import Replies from "../../../models/Replies";


export default async function handler(req, res) {
    await initMongoose();
    if (req.method === 'DELETE') {
        const id = req.url?.split('/')[3]
        const reply = await Replies.findByIdAndDelete(id);
        if (!reply) {
        const error = new Error('Could not find reply.')
        error.statusCode = 404;
        throw error;
        }
        res.status(201).json({message: 'Reply Deleted'})
      }
}
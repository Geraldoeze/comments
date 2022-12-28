import {model, models, Schema} from 'mongoose';

const replySchema = new Schema({
    ide: { type: Number},
    content: {type: String},
    createdAt: {type: Number},
    score: {type: Number},
    replyingTo: {type: String},
    user: {type: Object},
    username: {type: String},
})

const Replies = models?.Replies || model('Replies', replySchema)

export default Replies;
  





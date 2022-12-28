
import {model, models, Schema} from 'mongoose';


const commentSchema = new Schema({
    ide: { type: Number},
    content: {type: String},
    createdAt: {type: Number},
    score: {type: Number},
    user: {type: Object},
    username: {type: String},
    replies: {type: String}
})


const Comment = models?.Comment || model('Comment', commentSchema)

export default Comment;
  




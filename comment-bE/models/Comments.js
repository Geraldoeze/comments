const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    ide: { type: Number},
    content: {type: String},
    createdAt: {type: Number},
    score: {type: Number},
    user: {type: Object},
    username: {type: String},
    replies: {type: String}
})

module.exports = mongoose.model("Comment", commentSchema);




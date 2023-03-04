const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const replySchema = new Schema({
    ide: { type: Number},
    content: {type: String},
    createdAt: {type: Number},
    score: {type: Number},
    replyingTo: {type: String},
    user: {type: Object},
    username: {type: String},
})

module.exports = mongoose.model("Reply", replySchema);  





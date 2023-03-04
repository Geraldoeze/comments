const Comment = require("../models/Comments");

exports.getAllComment = async (req, res, next) => {
  try {
    const comment = await Comment.find().exec();

    res.status(200).json({ response: comment });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: err });
  }
};

exports.addComment = async (req, res, next) => {
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
      console.log("error")
    // res.status(501).json({ message: err });
  }
};

exports.updateComment = async (req, res, next) => {
  const { ide, content, createdAt } = req.body;
  const Updatedcomment = await Comment.findOne({ide: ide});
  if (!Updatedcomment) {
    const error = new Error("Could not find comment.");
    error.statusCode = 404;
    throw error;
  }
  try {
    Updatedcomment.content = content;
    Updatedcomment.createdAt = createdAt;
    const result = await Updatedcomment.save();
    res.status(201).json({ message: "Updated comment", comment: result });
  } catch (err) {
    console.log("error Up")
    // res.status(501).json({ message: err });
  }
};

exports.deleteComment = async (req, res, next) => {
    const ide = req.params.uid;
  const deleteComment = await Comment.findOneAndDelete({ide: ide})
  if (!deleteComment) {
    const error = new Error("Could not find comment.");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ message: "Comment Deleted" });
};

exports.updatePoint = async (req, res, next) => {
  try {
    const score = req.body.score;
    const ide = req.body.ide;
    const updatescore = await Comment.findOne({ide: ide});
    if (!updatescore) {
      const error = new Error("Could not find this User.");
      error.statusCode = 404;
      throw error;
    }
    updatescore.score = score;
    await updatescore.save();
    res.status(201).json({ message: "Score updated" });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: err });
  }
};

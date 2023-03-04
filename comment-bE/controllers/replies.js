const Reply = require("../models/Replies");

exports.getAllReplies = async (req, res, next) => {
  try {
    const reply = await Reply.find().exec();
    res.status(200).json({ response: reply });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: err });
  }
};

exports.addReply = async (req, res, next) => {
    
  const { ide, content, user, replyingTo, score, createdAt } = req.body;
  const newReply = new Reply({
    ide: ide,
    content: content,
    createdAt: createdAt,
    score: score,
    replyingTo: replyingTo,
    user: user,
  });
  try {
    await newReply.save();
    res.status(201).json({
      message: "Reply added",
      replies: newReply,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: err });
  }
};

exports.updateReply = async (req, res, next) => {
  const { ide, content, createdAt } = req.body;
  const Updatedreply = await Reply.findOne({ide: ide});
  if (!Updatedreply) {
    const error = new Error("Could not find reply.");
    error.statusCode = 404;
    throw error;
  }
  try {
    Updatedreply.content = content;
    Updatedreply.createdAt = createdAt;
    const result = await Updatedreply.save();
    res.status(201).json({ message: "Updated reply", reply: result });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: err });
  }
};

exports.deleteReply = async (req, res, next) => {
  const ide = req.params.uid;
  const reply = await Reply.findOneAndDelete({ide: ide});
  if (!reply) {
    const error = new Error("Could not find reply.");
    error.statusCode = 404;
    throw error;
  }
  res.status(201).json({ message: "Reply Deleted" });
};

exports.updatePoint = async (req, res, next) => {
  try {
    const score = req.body.score;
    const ide = req.body.ide;

    const updatescore = await Reply.findOne({ide: ide});
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

const User = require("../models/User");

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.find().exec();
    
    res.status(200).json({ response: user });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: err });
  }
};



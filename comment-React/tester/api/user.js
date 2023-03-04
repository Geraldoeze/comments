import User from "../../models/User";

export async function getUser() {
  return User.find().exec();
}

export async function handler(req, res) {
  await initMongoose();
  res.status(201).json(await getUser());
}

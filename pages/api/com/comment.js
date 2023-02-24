import { initMongoose } from "../../../lib/mongoose";

export default async function handler(req, res) {
    await initMongoose();
    res.status(200).json({ name: "John Doe" });
  }
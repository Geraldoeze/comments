import { initMongoose } from "../../../lib/mongoose";

export default function handler(req, res) {
    initMongoose();
    res.status(200).json({ name: "John Doe" });
  }
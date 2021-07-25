// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email?.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res
        .status(400)
        .json({ message: "Invalid input. Please enter correct inputs." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.dqm21.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    let client;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Connection failed." });
      return;
    }

    const db = client.db();

    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Failed to send message..." });
      return;
    }

    client.close();

    res.status(200).json({ message: "Success!" });
  }
}

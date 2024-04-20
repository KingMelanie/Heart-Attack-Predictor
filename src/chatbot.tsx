import { Hono } from "hono";
require("dotenv").config();

import OpenAI from "openai";
import { User } from "../types";
import database from "./database";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const openaiApiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openaiApiKey, // This is the default and can be omitted
});

type Variables = {
  user: User;
};

const chatbot = new Hono<{
  Variables: Variables;
}>();

chatbot.get("/", async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json({ error: "Login Required" }, 500);
  }

  const conversation = user.conversation_id;

  if (!conversation) {
    return c.json({ error: "No conversation found" }, 500);
  }

  const messages = await openai.beta.threads.messages.list(conversation, {
    order: "asc",
  });

  return c.json(
    messages.data.map((message) => {
      return {
        id: message.id,
        role: message.role,
        content: message.content.map((content) => {
          return content.text.value;
        }),
        createdAt: dayjs(message.created_at * 1000).fromNow(),
      };
    })
  );
});

chatbot.post("/", async (c) => {
  const form = await c.req.json();

  const user = c.get("user");

  if (!user) {
    return c.json({ error: "Login Required" }, 500);
  }

  // Get the conversation ID from the form data
  let conversation = user.conversation_id;

  if (!conversation) {
    const response = await openai.beta.threads.create();
    conversation = response.id;
    // Store the conversation ID in the user's table
    const connection = await database();
    await connection.execute(
      "UPDATE users SET conversation_id = ? WHERE id = ?",
      [conversation, c.get("user").id]
    );
  }

  const message = form.message;

  const response = await openai.beta.threads.messages.create(conversation, {
    role: "user",
    content: message.toString(),
  });

  await openai.beta.threads.runs.create(conversation, {
    assistant_id: "asst_p1C5yBRNIzbOvMOCZlaponzN",
  });

  return c.json({ message: "Message sent" });
});

export default chatbot;

import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { db, _dummy } from "database";
import { FE_BE_UTILS, type ChatRequest, type ChatResponse } from "fe-be-utils";
import { traceOpenAI } from "openlayer/lib/integrations/openAiTracer";

const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const openai = traceOpenAI(
  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  }) as any
);

app.get("/", (_, res) => {
  res.send(`Hello World ${FE_BE_UTILS}`);
});

app.get("/dummy", async (_, res) => {
  const dummy = await db.select().from(_dummy);
  res.json(dummy);
});
app.post("/dummy", async (_, res) => {
  const dummy = await db.select().from(_dummy);
  res.json(dummy);
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body as ChatRequest;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
  });

  const reply = completion.choices[0]?.message?.content || "";

  const response: ChatResponse = {
    reply,
  };

  res.json(response);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

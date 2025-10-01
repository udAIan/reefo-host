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

const traceOpenai = traceOpenAI(
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

  const completion = await traceOpenai.chat.completions.create({
    model: "gpt-4o",
    messages: messages,
  });

  const reply = completion.choices[0]?.message?.content || "";

  const response: ChatResponse = {
    reply,
  };

  res.json(response);
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// LLM test endpoint
app.get("/api/llm-test", async (_, res) => {
  const randomNumber = Math.floor(Math.random() * 101);

  const completion = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",
    input: [
      {
        role: "user",
        content: `The number is ${randomNumber}. If it's more than 50, set moreThan50 to true and include a message like "number ${randomNumber} is more than 50". If it's 50 or less, set moreThan50 to false and set message to empty string.`,
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "number_check",
        strict: true,
        schema: {
          type: "object",
          properties: {
            moreThan50: {
              type: "boolean",
            },
            message: {
              type: "string",
            },
          },
          required: ["moreThan50", "message"],
          additionalProperties: false,
        },
      },
    },
  });

  const result = completion.output_parsed! as {
    moreThan50: boolean;
    message: string;
  };

  res.json(result);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});

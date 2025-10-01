export const FE_BE_UTILS = "fe-be-utils-constant";

// Chat types
export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type ChatRequest = {
  messages: Message[];
};

export type ChatResponse = {
  reply: string;
};

import axios from "axios";
import type { ChatRequest, ChatResponse } from "fe-be-utils";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const chatApi = {
  sendMessage: async (request: ChatRequest): Promise<ChatResponse> => {
    const response = await api.post<ChatResponse>("/api/chat", request);
    return response.data;
  },
};

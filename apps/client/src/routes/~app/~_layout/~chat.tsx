import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../../../shadcn/components/button";
import { Input } from "../../../shadcn/components/input";
import { Avatar, AvatarFallback } from "../../../shadcn/components/avatar";
import { type Message } from "fe-be-utils";

export const Route = createFileRoute("/app/_layout/chat")({
  component: () => <ChatComponent />,
});

const ChatComponent = () => {
  // Sample mock data for testing UI
  const [messages] = useState<Message[]>([
    { role: "user", content: "Hello! How are you?" },
    { role: "assistant", content: "I'm doing great! How can I help you today?" },
    { role: "user", content: "Can you explain what TypeScript is?" },
    {
      role: "assistant",
      content:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      // TODO: Will connect to API in Phase 4
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              {/* Avatar */}
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className={message.role === "user" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}>
                  {message.role === "user" ? "U" : "AI"}
                </AvatarFallback>
              </Avatar>

              {/* Message bubble */}
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-green-100 text-green-900"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t p-4">
        <div className="mx-auto flex max-w-3xl gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

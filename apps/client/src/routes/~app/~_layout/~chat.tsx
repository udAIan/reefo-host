import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Button } from "../../../shadcn/components/button";
import { Input } from "../../../shadcn/components/input";
import { Avatar, AvatarFallback } from "../../../shadcn/components/avatar";
import { type Message } from "fe-be-utils";
import { chatApi } from "../../../lib/api";

export const Route = createFileRoute("/app/_layout/chat")({
  component: () => <ChatComponent />,
});

const ChatComponent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = {
        role: "user",
        content: input.trim(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      const response = await chatApi.sendMessage({
        messages: [...messages, userMessage],
      });

      const aiMessage: Message = {
        role: "assistant",
        content: response.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
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
          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="bg-green-500 text-white">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-green-100 px-4 py-2 text-green-900">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
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
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading}>Send</Button>
        </div>
      </div>
    </div>
  );
};

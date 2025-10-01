import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import axios from "axios";

export const Route = createFileRoute("/app/_layout/route1")({
  component: () => <RouteComponent />,
});

const RouteComponent = () => {
  const [response, setResponse] = useState<{
    moreThan50: boolean;
    message?: string;
  } | null>(null);

  const callLLM = async () => {
    const { data } = await axios.get("http://localhost:3000/api/llm-test", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    setResponse(data);
  };

  return (
    <div className="p-4">
      <button
        onClick={callLLM}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Call LLM
      </button>
      {response && (
        <pre className="mt-4">{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
};

import { createRootRoute } from "@tanstack/react-router";
import { Button } from "../shadcn/button";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>Hello World</h1>
      <Button variant="destructive">Click me</Button>
    </>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../shadcn/components/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Separator } from "../shadcn/components/separator";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-screen">
        <header className="h-16 shrink-0 flex items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          Breadcrumb placeholder
        </header>
        <div className="flex gap-4 overflow-y-auto">
          <div className="flex flex-col gap-4 p-4 overflow-y-auto">
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
            <h1>Top content</h1>
          </div>
          <div className="flex-1 flex flex-col gap-4 p-4  overflow-y-auto">
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

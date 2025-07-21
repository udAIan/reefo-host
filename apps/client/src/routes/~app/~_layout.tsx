import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../shadcn/components/sidebar";
import { AppSidebar } from "../app-sidebar";
import { Separator } from "../../shadcn/components/separator";

export const Route = createFileRoute("/app/_layout")({
  component: () => <RouteComponent />,
});

const RouteComponent = () => {
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
        {/* To make children vertically scrollable.
        Make all the children have `overflow-y-auto`. 
        `overflow-y-auto` should be used throughout the waterfall.*/}
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

/**
 * Example scrollable children - To see how it works.
 * Use this compnents in index.tsx file for this layout.
 */
// const ChildRouteComponent = () => {
//   return (
//     <div className="overflow-y-auto flex">
//       <div className="overflow-y-auto flex flex-col gap-4 p-4">
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//         <h1>Top content</h1>
//       </div>
//       <div className="overflow-y-auto flex-1 flex flex-col gap-4 p-4  ">
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//       </div>
//     </div>
//   );
// };

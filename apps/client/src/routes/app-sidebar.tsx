import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../shadcn/components/sidebar";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/components/dropdown-menu";
import { ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "../shadcn/components/avatar";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarFallback
                      className={`${getAvatarColor("Udayan Maurya").bg} ${
                        getAvatarColor("Udayan Maurya").text
                      }`}
                    >
                      UM
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-2">Udayan Maurya</span>
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                className="w-[var(--radix-dropdown-menu-trigger-width)]"
              >
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Group 1 */}
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/app/route1"
                    activeProps={{
                      className:
                        "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                    }}
                  >
                    Route 1
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/app/route2"
                    activeProps={{
                      className:
                        "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                    }}
                  >
                    Route 2
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/app/chat"
                    activeProps={{
                      className:
                        "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                    }}
                  >
                    Chat
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Group 2 */}
        {/* <SidebarGroup>
          <SidebarGroupLabel>Building Your Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Routing</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Data Fetching</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

// Generate a consistent color based on text
const getAvatarColor = (text: string) => {
  const colorPairs = [
    { bg: "bg-red-500", text: "text-sidebar-foreground" },
    { bg: "bg-orange-500", text: "text-sidebar-foreground" },
    { bg: "bg-amber-500", text: "text-sidebar" },
    { bg: "bg-yellow-500", text: "text-sidebar" },
    { bg: "bg-lime-500", text: "text-sidebar" },
    { bg: "bg-green-500", text: "text-sidebar-foreground" },
    { bg: "bg-emerald-500", text: "text-sidebar-foreground" },
    { bg: "bg-teal-500", text: "text-sidebar-foreground" },
    { bg: "bg-cyan-500", text: "text-sidebar-foreground" },
    { bg: "bg-sky-500", text: "text-sidebar-foreground" },
    { bg: "bg-blue-500", text: "text-sidebar-foreground" },
    { bg: "bg-indigo-500", text: "text-sidebar-foreground" },
    { bg: "bg-violet-500", text: "text-sidebar-foreground" },
    { bg: "bg-purple-500", text: "text-sidebar-foreground" },
    { bg: "bg-fuchsia-500", text: "text-sidebar-foreground" },
    { bg: "bg-pink-500", text: "text-sidebar-foreground" },
    { bg: "bg-rose-500", text: "text-sidebar-foreground" },
  ];

  // Simple hash function to get consistent color for same text
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  const index = Math.abs(hash) % colorPairs.length;
  return colorPairs[index];
};

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import { NavUser } from "./nav-user";
import { GalleryVerticalEnd } from "lucide-react";


import { Plus, Home, Users, CircleFadingArrowUp } from "lucide-react";

// Menu items
const menuItems = [
  { title: "Create", icon: Plus, url: "/create" },
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Community", icon: Users, url: "/community" },
  { title: "Premium Version", icon: CircleFadingArrowUp, url: "/come" },
//   { title: "Profile", icon: User, url: "/profile" },
//   { title: "Settings", icon: Cog, url: "/settings" },
];
const user = {
  name: "Connected User", // Replace with the actual connected user's name dynamically if needed
  email: "connecteduser@example.com",
  avatar: "/avatars/connecteduser.jpg",
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Climate For All</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup />
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  );
}

import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Calendar, Home, Menu, MessageCircle, Search, Settings, UserCircle } from "lucide-react";
import NotificationsPanel from "@/components/ui/notifications";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageCircle,
    badge: 3
  },
  {
    title: "Calendrier",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Recherche",
    url: "/search",
    icon: Search,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border h-full bg-sidebar">
      <SidebarContent className="pt-6">
        <div className="flex items-center justify-center mb-8 px-4">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground rounded-lg p-3 mr-2">
            <Home size={20} />
          </div>
          <h1 className="text-xl font-bold text-sidebar-foreground">MonDashboard</h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider px-4 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`flex items-center gap-3 p-3 px-4 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-primary transition-colors rounded-md`}>
                    <Link to={item.url} className="flex items-center w-full">
                      <item.icon size={18} className="mr-3" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-sidebar-primary text-sidebar-primary-foreground text-xs rounded-full px-2 py-0.5">{item.badge}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 mt-8">
          <div className="flex items-center p-4 bg-sidebar-accent rounded-lg border border-sidebar-border">
            <UserCircle className="text-sidebar-foreground/70 mr-3" size={24} />
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">Jean Dupont</p>
              <p className="text-xs text-sidebar-foreground/60">Administrateur</p>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <AppSidebar />
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 overflow-auto w-full">
          {/* Header avec notifications */}
          <header className="bg-card border-b border-border px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <SidebarTrigger className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu size={20} />
                </Button>
              </SidebarTrigger>
              <h2 className="ml-4 text-lg font-medium text-foreground hidden sm:block">MonDashboard</h2>
            </div>

            <div className="flex items-center gap-3">
              <NotificationsPanel />
              <UserCircle className="text-foreground/70" size={20} />
            </div>
          </header>

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

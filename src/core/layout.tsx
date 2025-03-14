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
    <Sidebar className="border-r border-gray-200 h-full">
      <SidebarContent className="pt-6">
        <div className="flex items-center justify-center mb-8 px-4">
          <div className="bg-blue-600 text-white rounded-lg p-3 mr-2">
            <Home size={20} />
          </div>
          <h1 className="text-xl font-bold text-gray-800">MonDashboard</h1>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`flex items-center gap-3 p-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors`}>
                    <Link to={item.url} className="flex items-center w-full">
                      <item.icon size={18} className="mr-3" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">{item.badge}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 mt-8">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <UserCircle className="text-gray-500 mr-3" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-700">Jean Dupont</p>
              <p className="text-xs text-gray-500">Administrateur</p>
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
      <div className="flex h-screen w-full overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <AppSidebar />
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 overflow-auto w-full">
          {/* Header avec notifications */}
          <header className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <SidebarTrigger className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu size={20} />
                </Button>
              </SidebarTrigger>
              <h2 className="ml-4 text-lg font-medium text-gray-800 hidden sm:block">MonDashboard</h2>
            </div>

            <div className="flex items-center gap-3">
              <NotificationsPanel />
              <UserCircle className="text-gray-600" size={20} />
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

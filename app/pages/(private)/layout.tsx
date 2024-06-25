import Header from "@/app/components/header/Header";
import { Sidebar, SidebarItem } from "@/app/components/sidebar/Sidebar";
import {
  Boxes,
  Columns3,
  Home,
  Presentation,
  TicketX,
  UsersRound,
} from "lucide-react";
import React, { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<Presentation />}
          text="Projects"
          alert
          href="/pages/projects"
        />
        <SidebarItem
          icon={<Boxes />}
          text="Dashboard"
          alert
          href="/pages/dashboard"
        />
        <SidebarItem
          icon={<UsersRound />}
          text="Teams"
          alert
          href="/pages/teams"
        />
        <SidebarItem
          icon={<Columns3 />}
          text="Board"
          alert
          href="/pages/board"
        />
        <SidebarItem
          icon={<TicketX />}
          text="Backlog"
          alert
          href="/pages/backlog"
        />
      </Sidebar>
      <div className="flex flex-col flex-grow w-10/12 max-h-screen">
        <Header />
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg m-auto"></span>
          }
        >
          <div className="flex-grow p-2">{children}</div>
        </Suspense>
      </div>
    </div>
  );
};

export default layout;

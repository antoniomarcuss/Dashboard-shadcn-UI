import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { ObjectMenu } from "@/components/ObjectMenu";
import { Airplay, LogOut } from "lucide-react";
import Link from "next/link";

import DropdownMenus from "../DropDownMenu";
const Aside = () => {
  const menu = ObjectMenu();

  return (
    <aside className="hidden sm:flex flex-col  fixed inset-y-0 left-0  w-16 items-center gap-10 pt-4 bg-white shadow-xl dark:bg-black">
      <Link
        href="/"
        className=" w-9 h-10 rounded-full flex justify-center items-center text-primary  "
      >
        <Airplay />
      </Link>
      <TooltipProvider>
        <div className="flex flex-col items-center justify-between h-full py-2">
          <nav className="flex flex-col  items-center gap-8">
            {menu.map(({ icon, name }) => (
              <Tooltip key={name}>
                <TooltipTrigger>
                  <span className="w-5 h-5">{icon}</span>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            <nav className="flex flex-col gap-6">
              <DropdownMenus />
            </nav>
          </nav>
          <nav>
            <Tooltip>
              <TooltipTrigger>
                <LogOut className="w-5 h-5" />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Sair</p>
              </TooltipContent>
            </Tooltip>
          </nav>
        </div>
      </TooltipProvider>
    </aside>
  );
};

export default Aside;

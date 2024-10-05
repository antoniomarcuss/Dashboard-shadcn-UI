"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Atom, LogOut, PanelBottomOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ObjectMenu } from "../ObjectMenu";

const SheetMobile = () => {
  const menu = ObjectMenu();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <PanelBottomOpen />
          <span className="sr-only">Abrir/fechar</span>
        </SheetTrigger>
        <SheetContent className={`bg-white rounded-l-md  dark:bg-black`}>
          <DialogTitle className="sr-only">Munu</DialogTitle>
          <DialogDescription className="sr-only">
            Escolha uma das opções do menu para navegar
          </DialogDescription>

          <div className="flex flex-col  h-full gap-6">
            <Link
              href="#"
              className={` w-9 h-9 rounded-full flex justify-center items-center text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white`}
            >
              <Atom />
            </Link>
            <nav className=" flex flex-col pl-1 h-full gap-6">
              {menu.map(({ name, icon }) => (
                <Link
                  key={name}
                  href="#"
                  className={`flex items-center  gap-6 text-muted-foreground hover:text-foreground dark:text-gray-300  dark:hover:text-white`}
                >
                  <button className="mb-1 h-5 w-5">{icon}</button>
                  <span>{name}</span>
                </Link>
              ))}
            </nav>
            <nav>
              <Link
                href="#"
                className={`flex items-center  gap-6 text-muted-foreground hover:text-foreground dark:text-gray-300 dark:hover:text-white "
                }`}
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SheetMobile;

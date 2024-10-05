import { ChartNoAxesGanttIcon, ShoppingBag, User } from "lucide-react";

import React from "react";

type Menu = {
  name: string;
  icon: React.ReactNode;
};

export const ObjectMenu = (): Menu[] => {
  const menu: Menu[] = [
    {
      name: "Usuários",
      icon: <User />,
    },
    {
      name: "Produtos",
      icon: <ShoppingBag />,
    },
    {
      name: "Categorias",
      icon: <ChartNoAxesGanttIcon />,
    },
  ];
  return menu;
};

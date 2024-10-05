import React from "react";
import ThemeSwitcher from "@/components/ThemeProvider/theme-switcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeController = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ThemeSwitcher align="end" />
          </TooltipTrigger>
          <TooltipContent side="right">Tema</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ThemeController;

import SheetMobile from "../../SheetMobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import ThemeSwitcher from "../../ThemeProvider/theme-switcher";
import MenubarBars from "../../MenuBar";

const Header = () => {
  return (
    <header
      className={`bg-gray-50 h-16 p-4 flex sm:bg-transparent sm:hidden shadow-md dark:bg-black items-center justify-between `}
    >
      <SheetMobile />
      <menu>
        <MenubarBars />
      </menu>
      <menu className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ThemeSwitcher align="end" />
            </TooltipTrigger>
            <TooltipContent side="left">Tema</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </menu>
    </header>
  );
};

export default Header;

import MenubarBars from "@/components/MenuBar";
import NavigationMenus from "@/components/NavigationMenu";
import ThemeController from "@/components/ThemeController";
const HeaderDesktop = () => {
  return (
    <header className=" dark:text-white hidden sm:flex p-2 text ml-16 justify-between">
      <NavigationMenus />
      <div className="flex w-[58%] justify-between">
        <MenubarBars />
        <ThemeController />
      </div>
    </header>
  );
};

export default HeaderDesktop;

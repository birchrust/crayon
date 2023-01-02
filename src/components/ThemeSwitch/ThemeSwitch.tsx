import * as React from "react";
import { RiSunLine, RiMoonFoggyLine } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { useTheme } from "next-themes";
import { Menu, Transition, Tab } from "@headlessui/react";

type ThemeSwitchProps = {
  children?: React.ReactNode;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const { theme, setTheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  console.log(theme);
  return (
    <Menu as="div" className="relative flex items-center">
      <Menu.Button>
        {theme === "dark" ? (
          <RiMoonFoggyLine className="h-6 w-6" />
        ) : (
          <RiSunLine className="h-6 w-6" />
        )}
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as={"ul"}
          className="absolute top-full right-0 z-50 mt-5 w-auto overflow-hidden rounded-lg border py-1  text-sm font-semibold shadow-lg  outline-none"
        >
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List>
              <Tab as={React.Fragment}>
                <li
                  className="flex cursor-pointer items-center py-1 px-2 hover:bg-slate-50 ui-selected:text-sky-500"
                  onClick={() => setTheme("light")}
                >
                  <span className="px-2">
                    <RiSunLine className="h-4 w-4" />
                  </span>
                  Light
                </li>
              </Tab>
              <Tab as={React.Fragment}>
                <li
                  className="flex cursor-pointer items-center py-1 px-2 hover:bg-slate-50 ui-selected:text-sky-500"
                  onClick={() => setTheme("dark")}
                >
                  <span className="px-2">
                    <RiMoonFoggyLine className="h-4 w-4" />
                  </span>
                  dark
                </li>
              </Tab>
              <Tab as={React.Fragment}>
                <li
                  className="flex cursor-pointer items-center py-1 px-2 hover:bg-slate-50 ui-selected:text-sky-500"
                  onClick={() => setTheme("system")}
                >
                  <span className="px-2">
                    <HiOutlineDesktopComputer className="h-4 w-4" />
                  </span>
                  System
                </li>
              </Tab>
            </Tab.List>
          </Tab.Group>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeSwitch;

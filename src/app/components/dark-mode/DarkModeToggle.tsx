"use client";

import { Flex } from "antd";
import clsx from "clsx";
import { useDarkModeStore } from "@/store/darkmodeStore";
import MoonIcon from "@/../public/icons/icon_moon.svg";
import SunIcon from "@/../public/icons/icon_sun.svg";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  return (
    <Flex
      justify="center"
      align="center"
      className={clsx(
        "w-9 h-9 border-2 border-border rounded-full shadow-sm cursor-pointer transition-all bg-btn-background"
      )}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MoonIcon className="" /> : <SunIcon />}
    </Flex>
  );
};
export default DarkModeToggle;

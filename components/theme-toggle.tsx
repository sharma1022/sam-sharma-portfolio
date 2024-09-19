import { useTheme } from "next-themes";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export interface ThemeSwitchProps {
  setClose?: Dispatch<SetStateAction<boolean>>;
}

const ThemeToggle = (props: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleThemeChange = () => {
    if (props.setClose) {
      props.setClose(false);
    }
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <>
      {mounted &&
        (theme === "dark" || resolvedTheme === "dark" ? (
          <>
            <LuSun
              size={24}
              aria-label="toggle theme"
              className="mt-8 cursor-pointer h-10 w-10 rounded-full text-accent transition-[scale] duration-200 hover:scale-[1.1] md:mr-4 md:mt-0 md:h-6 md:w-6"
              onClick={handleThemeChange}
            />
            <span className="sr-only">toggle theme</span>
          </>
        ) : (
          <>
            <LuMoon
              size={24}
              aria-label="toggle theme"
              className="mt-8  cursor-pointer h-10 w-10 rounded-full text-accent transition-[scale] duration-200 hover:scale-[1.1] md:mr-4 md:mt-0 md:h-6 md:w-6"
              onClick={handleThemeChange}
            />
            <span className="sr-only">toggle theme</span>
          </>
        ))}
    </>
  );
};

export default ThemeToggle;

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={toggleTheme} className="flex items-center theme-button">
        {theme === "light" ? (
          <>
            <FaMoon className="mr-2" />
            Dark Mode
          </>
        ) : (
          <>
            <FaSun className="mr-2" />
            Light Mode
          </>
        )}
      </button>
    </div>
  );
}

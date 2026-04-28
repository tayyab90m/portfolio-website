"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
      <span className="toggle-orb" aria-hidden="true" />
    </button>
  );
}

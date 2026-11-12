"use client";
import { useEffect, useState } from "react";
type Theme = "light" | "dark";
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const initial =
      saved ??
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = initial;
    const frame = requestAnimationFrame(() => setTheme(initial));
    return () => cancelAnimationFrame(frame);
  }, []);
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  };
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}

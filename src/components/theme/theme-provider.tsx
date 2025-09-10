"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid hydration mismatch

  const current = resolvedTheme || systemTheme || theme;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        aria-label="Light theme"
        className={`rounded-md border px-2 py-1 ${current === "light" ? "bg-muted" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        aria-label="Dark theme"
        className={`rounded-md border px-2 py-1 ${current === "dark" ? "bg-muted" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        aria-label="System theme"
        className={`rounded-md border px-2 py-1 ${theme === "system" ? "bg-muted" : ""}`}
        onClick={() => setTheme("system")}
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
}

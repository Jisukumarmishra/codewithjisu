"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Jab tak component client par mount nahi hota, render mat karo (hydration mismatch bachane ke liye)
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        background: "transparent",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "inherit",
        transition: "all 0.3s ease",
      }}
      title="Toggle Theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

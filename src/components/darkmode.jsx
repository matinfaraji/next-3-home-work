"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [buttonColor, setButtonColor] = useState("white");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setButtonColor(newTheme === "light" ? "white" : "black");
  };

  return (
    <Button
      variant="contained"
      onClick={toggleTheme}
      sx={{
        backgroundColor: buttonColor,
        color: buttonColor === "white" ? "black" : "white",
        "&:hover": {
          backgroundColor: buttonColor === "white" ? "black" : "white",
          color: buttonColor === "white" ? "white" : "black",
        },
      }}
    >
      {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

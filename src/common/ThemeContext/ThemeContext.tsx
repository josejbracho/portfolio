import { ReactNode, createContext, useEffect, useState } from "react";
import { Theme } from "./types";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  mode: string;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
  toggleMode: () => {},
} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || Theme.LIGHT
  );
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || Theme.NORMAL
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-mode", mode);
    localStorage.setItem("mode", mode);
  }, [theme, mode]);

  useEffect(() => {
    if (mode === Theme.PIXEL) {
      // Dynamically add the nes.css link to the head
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/node_modules/nes.css/css/nes.min.css"; // Adjust the path if needed
      link.id = "nes-css-link";
      document.head.appendChild(link);
    } else {
      // Remove the nes.css link from the head
      const existingLink = document.getElementById("nes-css-link");
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    }
  }, [mode]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  const toggleMode = () => {
    setMode((prevMode) =>
      prevMode === Theme.NORMAL ? Theme.PIXEL : Theme.NORMAL
    );

    const existingLink = document.getElementById("nes-css-link");

    if (!(mode === Theme.PIXEL) && !existingLink) {
      // Dynamically add the nes.css link to the head
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/node_modules/nes.css/css/nes.min.css"; // Adjust the path if needed
      link.id = "nes-css-link";
      document.head.appendChild(link);
    } else if (mode === Theme.PIXEL && existingLink) {
      // Remove the nes.css link from the head
      document.head.removeChild(existingLink);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  const resetState = () => {
    context.toggleTheme();
    context.toggleTheme();
  };

  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
    mode: context.mode,
    toggleMode: context.toggleMode,
    resetState,
  };
};

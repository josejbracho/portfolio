import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  const resetState = () => {
    context.toggleTheme();
  };

  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
    resetState,
  };
};

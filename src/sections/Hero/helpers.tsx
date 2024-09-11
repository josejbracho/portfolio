import { Theme } from "../../common/ThemeContext/types";

export const themeIcons = {
  sunNormal: "sun-normal-path",
  sunPixel: "sun-pixel-path",
  moonNormal: "moon-normal-path",
  moonPixel: "moon-pixel-path",
};

export const modeIcons = {
  normalLight: "normal-light-path",
  normalDark: "normal-dark-path",
  pixelLight: "pixel-light-path",
  pixelDark: "pixel-dark-path",
};

export const getThemeIcon = (theme: string, mode: string) => {
  const isDarkMode = theme === Theme.DARK;
  const isPixelMode = mode === Theme.PIXEL;

  if (isDarkMode && isPixelMode) {
    return themeIcons.moonPixel;
  } else if (isDarkMode) {
    return themeIcons.moonNormal;
  } else if (isPixelMode) {
    return themeIcons.sunPixel;
  } else {
    return themeIcons.sunNormal;
  }
};

export const getToggleIcon = (theme: string, mode: string) => {
  const isDarkMode = theme === Theme.DARK;
  const isPixelMode = mode === Theme.PIXEL;

  if (isDarkMode && isPixelMode) {
    return modeIcons.pixelDark;
  } else if (isDarkMode) {
    return modeIcons.normalDark;
  } else if (isPixelMode) {
    return modeIcons.pixelLight;
  } else {
    return modeIcons.pixelDark;
  }
};

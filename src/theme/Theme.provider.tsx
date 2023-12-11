import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

import * as palette from "./palette";

interface ReThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  mode: "light",
  darkColors: {
    background: palette.dark.background,
    white: palette.dark.white,
  },
  lightColors: {
    background: palette.primary.background,
    primary: palette.primary.primary,
    secondary: palette.primary.secondary,
    divider: palette.primary.plateform,
    error: palette.primary.error,
    white: palette.primary.white,
  },
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

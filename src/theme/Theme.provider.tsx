import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

import * as palette from "./palette";

interface ReThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  darkColors: {},
  lightColors: {
    background: palette.primary.background,
    primary: palette.primary.primary,
    secondary: palette.primary.secondary,
    divider: palette.primary.plateform,
    error: palette.primary.error,
  },
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

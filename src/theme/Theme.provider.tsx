import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

import * as palette from "./palette";

interface ReThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  darkColors: {},
  lightColors: {
    error: palette.primary.red,
  },
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

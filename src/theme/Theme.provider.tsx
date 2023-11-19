import { ReactNode } from "react";

import { ThemeProvider, createTheme } from "@rneui/themed";

interface ReThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  darkColors: {},
  lightColors: {},
});

export const ReThemeProvider = ({ children }: ReThemeProviderProps) => {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

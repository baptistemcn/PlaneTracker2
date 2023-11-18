import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./store";

interface ReProviderProps {
  children: ReactNode;
}

export const ReProvider = ({ children }: ReProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n.store";

interface ReProviderProps {
  children: ReactNode;
}

export const ReI18nProvider = ({ children }: ReProviderProps) => {
  return <I18nextProvider {...{ i18n }}>{children}</I18nextProvider>;
};

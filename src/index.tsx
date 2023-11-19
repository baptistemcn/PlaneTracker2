import { ReI18nProvider } from "@i18n";

import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme/Theme.provider";

export const Entry = () => {
  return (
    <ReThemeProvider>
      <ReI18nProvider>
        <PlaneTracker />
      </ReI18nProvider>
    </ReThemeProvider>
  );
};

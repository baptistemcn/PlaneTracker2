import { LoadAssets } from "@components";
import { ReI18nProvider } from "@i18n";
import { ReThemeProvider } from "@theme";

import { PlaneTracker } from "./App";

export const Entry = () => {
  return (
    <ReThemeProvider>
      <LoadAssets>
        <ReI18nProvider>
          <PlaneTracker />
        </ReI18nProvider>
      </LoadAssets>
    </ReThemeProvider>
  );
};

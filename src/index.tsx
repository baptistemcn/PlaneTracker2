import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAssets } from "@components";
import { ReI18nProvider } from "@i18n";
import { SupabaseProvider } from "@providers";
import { ReThemeProvider } from "@theme";

import React, { Suspense, lazy } from "react";

const PlaneTracker = lazy(() =>
  import("./App").then((module) => ({ default: module.PlaneTracker })),
);

export const Entry = () => {
  return (
    <SupabaseProvider>
      <SafeAreaProvider>
        <ReThemeProvider>
          <LoadAssets>
            <ReI18nProvider>
              <Suspense>
                <PlaneTracker />
              </Suspense>
            </ReI18nProvider>
          </LoadAssets>
        </ReThemeProvider>
      </SafeAreaProvider>
    </SupabaseProvider>
  );
};

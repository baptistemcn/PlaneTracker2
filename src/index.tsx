import { ReI18nProvider } from "@i18n";

import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme/Theme.provider";
import { useFonts } from "expo-font";

export const Entry = () => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Oswald-Bold.ttf"),
    ExtraLight: require("../assets/fonts/Oswald-ExtraLight.ttf"),
    Light: require("../assets/fonts/Oswald-Light.ttf"),
    Medium: require("../assets/fonts/Oswald-Medium.ttf"),
    Regular: require("../assets/fonts/Oswald-Regular.ttf"),
    SemiBold: require("../assets/fonts/Oswald-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <ReThemeProvider>
      <ReI18nProvider>
        <PlaneTracker />
      </ReI18nProvider>
    </ReThemeProvider>
  );
};

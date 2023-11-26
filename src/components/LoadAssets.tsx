import { ReactNode } from "react";
import { useFonts } from "expo-font";

interface LoadAssetsProps {
  children: ReactNode;
}

const fontsPaths = {
  Bold: require("../../assets/fonts/Oswald-Bold.ttf"),
  ExtraLight: require("../../assets/fonts/Oswald-ExtraLight.ttf"),
  Light: require("../../assets/fonts/Oswald-Light.ttf"),
  Medium: require("../../assets/fonts/Oswald-Medium.ttf"),
  Regular: require("../../assets/fonts/Oswald-Regular.ttf"),
  SemiBold: require("../../assets/fonts/Oswald-SemiBold.ttf"),
};

export const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [fontsLoaded] = useFonts(fontsPaths);

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};

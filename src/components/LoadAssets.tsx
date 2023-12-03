import React, { ReactNode, useEffect, useState } from "react";
import { useFonts } from "expo-font";

interface LoadAssetsProps {
  children: ReactNode;
}

type Fonts = { [key: string]: string };

const fontsPaths: Fonts = {
  Bold: require("../../assets/fonts/Oswald-Bold.ttf"),
  ExtraLight: require("../../assets/fonts/Oswald-ExtraLight.ttf"),
  Light: require("../../assets/fonts/Oswald-Light.ttf"),
  Medium: require("../../assets/fonts/Oswald-Medium.ttf"),
  Regular: require("../../assets/fonts/Oswald-Regular.ttf"),
  SemiBold: require("../../assets/fonts/Oswald-SemiBold.ttf"),
};

export const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [fontsLoaded] = useFonts(fontsPaths);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /* istanbul ignore next */
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};

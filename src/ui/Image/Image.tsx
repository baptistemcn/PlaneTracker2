import { Image } from "react-native";

import { DUMMYIMG } from "@assets";
import { ReImageProps } from "@types";

export const ReImage = ({
  resizeMode = "center",
  source = DUMMYIMG,
  styles = { height: 64, width: 64 },
  testID = "image",
}: ReImageProps) => {
  return (
    <Image
      source={source!}
      style={styles}
      resizeMode={resizeMode}
      {...{ testID }}
    />
  );
};

import { ReactNode } from "react";
import { RectButtonProperties } from "react-native-gesture-handler";

export interface RoundedButtonProps {
  children: ReactNode;
  onPress?: () => void;
  style?: RectButtonProperties["style"];
  testID?: string;
}

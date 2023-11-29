import { RectButtonProperties } from "react-native-gesture-handler";

export interface ReButtonProps {
  label?: string;
  onPress?: () => void;
  style?: RectButtonProperties["style"];
  testID?: string;
  variant?: "primary" | "secondary";
}

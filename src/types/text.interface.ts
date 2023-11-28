import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReTextProps {
  children: ReactNode;
  nativewind?: string;
  styles?: StyleProp<TextStyle>;
  testID?: string;
}

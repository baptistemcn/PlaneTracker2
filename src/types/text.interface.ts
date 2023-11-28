import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReTextProps {
  children: ReactNode;
  fontFamily?: string;
  fontSize?: number;
  letterSpacing?: number;
  nativewind?: string;
  styles?: StyleProp<TextStyle>;
  testID?: string;
}

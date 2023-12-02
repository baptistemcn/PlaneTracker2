import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReTextProps {
  children: ReactNode;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: TextStyle["fontStyle"];
  letterSpacing?: number;
  nativewind?: string;
  styles?: StyleProp<TextStyle>;
  testID?: string;
}

import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReTextProps {
  children: ReactNode;
  color?: string;
  fontFamily?: fontFamily;
  fontSize?: number;
  fontStyle?: TextStyle["fontStyle"];
  letterSpacing?: number;
  nativewind?: string;
  styles?: StyleProp<TextStyle>;
  testID?: string;
}

type fontFamily =
  | "Bold"
  | "ExtraLight"
  | "Light"
  | "Medium"
  | "Regular"
  | "SemiBold";

import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface GridProps {
  columns?: number;
  data?: GridDataProps[];
  gridStyles?: StyleProp<ViewStyle>;
  testID?: string;
}

export interface GridDataProps {
  id?: string;
  children?: ReactNode;
}

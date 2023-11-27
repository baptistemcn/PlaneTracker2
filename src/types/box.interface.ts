import { ReactNode } from "react";
import {
  DimensionValue,
  FlexAlignType,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface ReBoxProps {
  alignItems?: FlexAlignType;
  backgroundColor?: string;
  children: ReactNode;
  flex?: number;
  flexDirection?: FlexDirectionProps;
  justifyContent?: JustifyContentProps;
  margin?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontale?: DimensionValue;
  nativewind?: string;
  padding?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  styles?: StyleProp<ViewStyle>;
  testID?: string;
}

type FlexDirectionProps = "row" | "column" | "row-reverse" | "column-reverse";

type JustifyContentProps =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

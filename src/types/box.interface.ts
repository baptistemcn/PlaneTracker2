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
  height?: DimensionValue;
  justifyContent?: JustifyContentProps;
  margin?: DimensionValue;
  marginTop?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  marginLeft?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontale?: DimensionValue;
  maxHeight?: DimensionValue;
  nativewind?: string;
  padding?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingBotton?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  styles?: StyleProp<ViewStyle>;
  width?: DimensionValue;
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

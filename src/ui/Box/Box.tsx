import { View } from "react-native";
import { styled } from "nativewind";
import { ReBoxProps } from "@types";

const StyledView = styled(View);

export const Box = ({
  alignItems = "center",
  backgroundColor = "#fff",
  children,
  flex,
  flexDirection,
  height,
  justifyContent = "center",
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginHorizontale,
  marginVertical,
  maxHeight,
  nativewind,
  padding,
  paddingBotton,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  width,
  styles = {
    alignItems: alignItems,
    backgroundColor: backgroundColor,
    flex: flex,
    flexDirection: flexDirection,
    height: height,
    justifyContent: justifyContent,
    margin: margin,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginHorizontal: marginHorizontale,
    marginVertical: marginVertical,
    maxHeight: maxHeight,
    padding: padding,
    paddingBottom: paddingBotton,
    paddingRight: paddingRight,
    paddingLeft: paddingLeft,
    paddingTop: paddingTop,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    width: width,
  },
  testID = "box",
}: ReBoxProps) => (
  <StyledView className={nativewind} style={styles} {...{ testID }}>
    {children}
  </StyledView>
);

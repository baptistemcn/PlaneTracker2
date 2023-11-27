import { View } from "react-native";
import { styled } from "nativewind";
import { ReBoxProps } from "@types";

const StyledView = styled(View);

export const Box = ({
  alignItems = "center",
  backgroundColor = "#fff",
  children,
  flex = 1,
  flexDirection = "column",
  justifyContent = "center",
  margin,
  marginHorizontale,
  marginVertical,
  nativewind,
  padding,
  paddingHorizontal,
  paddingVertical,
  styles = {
    alignItems: alignItems,
    backgroundColor: backgroundColor,
    flex: flex,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    margin: margin,
    marginHorizontal: marginHorizontale,
    marginVertical: marginVertical,
    padding: padding,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
  },
  testID = "box",
}: ReBoxProps) => {
  return (
    <StyledView className={nativewind} style={styles} {...{ testID }}>
      {children}
    </StyledView>
  );
};

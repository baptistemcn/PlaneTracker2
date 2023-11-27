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
  nativewind,
  styles = {
    flex: flex,
    flexDirection: flexDirection,
    backgroundColor: backgroundColor,
    alignItems: alignItems,
    justifyContent: justifyContent,
  },
  testID = "box",
}: ReBoxProps) => {
  return (
    <StyledView className={nativewind} style={styles} {...{ testID }}>
      {children}
    </StyledView>
  );
};

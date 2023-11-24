import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styled } from "nativewind";

interface BoxProps {
  children: ReactNode;
  nativewind?: string;
  styles?: StyleProp<ViewStyle>;
  testID?: string;
}

const StyledView = styled(View);

export const Box = ({
  children,
  nativewind,
  styles = {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  testID = "box",
}: BoxProps) => {
  return (
    <StyledView className={nativewind} style={styles} {...{ testID }}>
      {children}
    </StyledView>
  );
};

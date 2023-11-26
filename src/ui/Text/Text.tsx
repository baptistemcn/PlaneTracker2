import { styled } from "nativewind";
import { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

const StyledText = styled(Text);

interface ReTextProps {
  children: ReactNode;
  nativewind?: string;
  styles?: StyleProp<TextStyle>;
  testID?: string;
}

export const ReText = ({
  children,
  nativewind,
  styles,
  testID = "text",
}: ReTextProps) => (
  <StyledText className={nativewind} style={styles} {...{ testID }}>
    {children}
  </StyledText>
);

import { Text } from "react-native";
import { styled } from "nativewind";

import { ReTextProps } from "@types";

const StyledText = styled(Text);

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

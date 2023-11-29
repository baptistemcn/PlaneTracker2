import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@rneui/themed";

import { ReButtonProps } from "@types";

import { ReText } from "../Text";

import { useStyles } from "./Button.styles";

export const ReButton = ({
  label = "Click",
  onPress,
  style,
  testID = "button",
  variant = "primary",
}: ReButtonProps) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.secondary;
  const color =
    variant === "primary" ? theme.colors.black : theme.colors.background;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress, testID }}
    >
      <ReText styles={[styles.label, { color }]}>{label}</ReText>
    </RectButton>
  );
};

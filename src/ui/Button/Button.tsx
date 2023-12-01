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
    variant === "primary" ? theme.colors.primary : theme.colors.background;
  const borderColor =
    variant === "primary" ? theme.colors.primary : theme.colors.primary;
  const color = variant === "primary" ? theme.colors.black : theme.colors.black;

  return (
    <RectButton
      style={[
        styles.container,
        style,
        {
          backgroundColor,
          borderColor,
          borderWidth: 3,
          shadowOffset: { height: 6, width: 6 },
          shadowColor: theme.colors.grey0,
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
      ]}
      {...{ onPress, testID }}
    >
      <ReText styles={[styles.label, { color }]}>{label}</ReText>
    </RectButton>
  );
};

import { RectButton } from "react-native-gesture-handler";

import { useTheme } from "@rneui/themed";

import { IconButtonProps } from "@types";

import { Box } from "../Box";
import { ReIcon } from "../Icon";
import { ReText } from "../Text";

import { useStyles } from "./IconButton.style";

export const IconButton = ({
  label = "Icon",
  name = "sun",
  onPress,
  size = 18,
  testID = "icon-button",
}: IconButtonProps) => {
  const margin: number = 10;

  const { theme } = useTheme();
  const styles = useStyles();

  const backgroundColor = theme.mode && theme.colors.white;
  const color = theme.mode && theme.colors.background;

  return (
    <RectButton
      style={[styles.container, { ...{ backgroundColor } }]}
      {...{ onPress, testID }}
    >
      <Box {...{ backgroundColor }} testID="icon-container">
        <ReIcon {...{ color, name, size }} />
      </Box>
      <Box {...{ backgroundColor, margin }}>
        <ReText {...{ color }} testID="label">
          {label.toUpperCase()}
        </ReText>
      </Box>
    </RectButton>
  );
};

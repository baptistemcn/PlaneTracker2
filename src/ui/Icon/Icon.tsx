import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";
import { ReIconProps } from "@types";

export const ReIcon = ({ name = "sun", size = 18 }: ReIconProps) => {
  const { theme } = useTheme();

  const color = theme.mode && theme.colors.background;

  return <Icon {...{ color, name, size }} />;
};

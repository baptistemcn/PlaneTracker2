import { ReactNode } from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { languagePicker } from "./RoundedButton.styles";

interface RoundedButtonProps {
  children: ReactNode;
  onPress?: () => void;
  style?: RectButtonProperties["style"];
  testID?: string;
}

export const RoundedButton = ({
  children,
  onPress,
  style = { backgroundColor: "#FF0000" },
  testID = "rounded",
}: RoundedButtonProps) => {
  const picker = languagePicker();

  return (
    <RectButton style={[style, picker.button]} {...{ onPress, testID }}>
      {children}
    </RectButton>
  );
};

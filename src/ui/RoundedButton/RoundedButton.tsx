import { ReactNode } from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

interface RoundedButtonProps {
  children: ReactNode;
  onPress?: () => void;
  style?: RectButtonProperties["style"];
  testID?: string;
}

export const RoundedButton = ({
  children,
  onPress,
  style = {
    borderRadius: 15,
    height: 96,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 6,
    borderColor: "#000000",
  },
  testID = "rounded",
}: RoundedButtonProps) => {
  return (
    <RectButton style={[style]} {...{ onPress, testID }}>
      {children}
    </RectButton>
  );
};

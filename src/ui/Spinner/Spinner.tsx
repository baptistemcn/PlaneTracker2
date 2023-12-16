import { SpinnerProps } from "@types";
import { ActivityIndicator } from "react-native";

export const Spinner = ({
  color = "#000000",
  size = "small",
  testID = "spinner",
}: SpinnerProps) => <ActivityIndicator {...{ color, size, testID }} />;

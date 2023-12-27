import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface FormContainerProps {
  children: ReactNode;
  persistTaps?: boolean | "always" | "never" | "handled" | undefined;
  scrollEnabled?: boolean;
  showsVerticalScrollIndicator?: boolean;
  styles?: StyleProp<ViewStyle>;
  testID?: string;
}

export const FormContainer = ({
  children,
  persistTaps = "always",
  scrollEnabled = true,
  showsVerticalScrollIndicator = false,
  styles,
  testID = "form-container",
}: FormContainerProps) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={persistTaps}
      contentContainerStyle={[styles, { flex: 1 }]}
      {...{ scrollEnabled, showsVerticalScrollIndicator, testID }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

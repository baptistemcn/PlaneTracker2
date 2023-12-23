import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { TextInput } from "react-native";
import { useTheme } from "@rneui/themed";

import { CustomTextInputProps } from "@types";

import { Box } from "../Box";
import { ReText } from "../Text";

export const CustomTextInput: ForwardRefRenderFunction<
  TextInput,
  CustomTextInputProps
> = (
  {
    autoCapitalize,
    autoComplete,
    error,
    keyboardType = "default",
    onBlur,
    onChangeText,
    placeholder = "Text",
    secureTextEntry,
    testID = "input",
    value,
  },
  ref,
) => {
  const { theme } = useTheme();

  return (
    <Box width={"80%"}>
      <TextInput
        style={{
          width: "100%",
          textAlign: "left",
          padding: theme.spacing.lg,
          borderWidth: 2,
          borderRadius: 5,
        }}
        {...{
          autoCapitalize,
          autoComplete,
          onBlur,
          onChangeText,
          keyboardType,
          placeholder,
          ref,
          secureTextEntry,
          testID,
          value,
        }}
      />
      {error && <ReText>{error}</ReText>}
    </Box>
  );
};

export const ReTextInput = forwardRef(CustomTextInput);

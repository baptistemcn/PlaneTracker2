import { KeyboardTypeOptions } from "react-native";

export interface CustomTextInputProps {
  autoCapitalize?: autoCapitalize;
  autoComplete?: autoComplete;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  testID?: string;
  value?: string;
}

type autoCapitalize = "none" | "sentences" | "words" | "characters";

type autoComplete =
  | "additional-name"
  | "address-line1"
  | "address-line2"
  | "birthdate-day"
  | "birthdate-full"
  | "birthdate-month"
  | "birthdate-year"
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-day"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "country"
  | "current-password"
  | "email"
  | "family-name"
  | "gender"
  | "given-name"
  | "honorific-prefix"
  | "honorific-suffix"
  | "name"
  | "name-family"
  | "name-given"
  | "name-middle"
  | "name-middle-initial"
  | "name-prefix"
  | "name-suffix"
  | "new-password"
  | "nickname"
  | "one-time-code"
  | "organization"
  | "organization-title"
  | "password"
  | "password-new"
  | "postal-address"
  | "postal-address-country"
  | "postal-address-extended"
  | "postal-address-extended-postal-code"
  | "postal-address-locality"
  | "postal-address-region"
  | "postal-code"
  | "street-address"
  | "sms-otp"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-device"
  | "url"
  | "username"
  | "username-new"
  | "off";

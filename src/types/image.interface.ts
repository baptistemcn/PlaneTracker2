import {
  ImageResizeMode,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";

export interface ReImageProps {
  resizeMode?: ImageResizeMode;
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  testID?: string;
}

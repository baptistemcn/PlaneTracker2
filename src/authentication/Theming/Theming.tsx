import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@rneui/themed";

import { Box, ReButton, ReText } from "@ui";

import { ThemePicker } from "../components";

export const Theming = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      flexDirection={"column"}
      paddingBotton={insets.bottom}
      paddingTop={insets.top}
      width={"100%"}
    >
      <Box flex={1} flexDirection={"column"} maxHeight={"15%"}>
        <ReText
          fontFamily="Bold"
          fontSize={28}
          letterSpacing={3}
          testID="title"
        >
          {t("theming.message.title").toUpperCase()}
        </ReText>
      </Box>
      <Box flex={1} alignItems={"center"} maxHeight={"30%"}>
        <ReText testID="favorite">{t("theming.message.favorite")}</ReText>
      </Box>
      <Box flex={1} flexDirection={"column"} maxHeight={"15%"}>
        <Box flexDirection={"row"} margin={theme.spacing.xs} testID="picker">
          <ThemePicker />
        </Box>
        <Box margin={theme.spacing.xs}>
          <ReText color={theme.colors.grey2} fontFamily="Light" testID="help">
            {t("theming.message.start")}
          </ReText>
        </Box>
      </Box>
      <Box flex={1}>
        <ReButton label={t("common.button.next").toUpperCase()} />
      </Box>
    </Box>
  );
};

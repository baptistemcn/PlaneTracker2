import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@rneui/themed";

import { Box, ReButton, ReText } from "@ui";
import { LanguagePicker } from "../components";

export const Onboarding = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();
  return (
    <Box
      flex={1}
      flexDirection={"column"}
      paddingTop={insets.top}
      paddingBotton={insets.bottom}
      width={"100%"}
    >
      <Box flex={1} flexDirection={"column"} maxHeight={"15%"}>
        <ReText fontFamily="Bold" fontSize={32} letterSpacing={3}>
          {t("name").toUpperCase()}
        </ReText>
      </Box>
      <Box flex={1} flexDirection={"column"} maxHeight={"30%"}>
        <ReText>{t("onboarding.message.welcome")}</ReText>
      </Box>
      <Box flex={1} flexDirection={"column"} maxHeight={"15%"}>
        <LanguagePicker />
      </Box>
      <Box flex={1} flexDirection={"column"}>
        <Box margin={theme.spacing.md}>
          <ReText color={theme.colors.grey2} fontFamily="Light">
            {t("onboarding.message.start")}
          </ReText>
        </Box>
        <Box margin={theme.spacing.md}>
          <ReButton label={t("common.button.start").toUpperCase()} />
        </Box>
      </Box>
    </Box>
  );
};

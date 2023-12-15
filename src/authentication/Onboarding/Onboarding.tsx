import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@rneui/themed";

import { Box, ReButton, ReText } from "@ui";
import { AuthNavigationProps } from "@routes";

import { LanguagePicker } from "../components";

export const Onboarding = ({
  navigation,
}: AuthNavigationProps<"Onboarding">) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const backgroundColor = theme.colors.background;
  const color = theme.colors.white;

  return (
    <Box
      flex={1}
      flexDirection={"column"}
      paddingTop={insets.top}
      paddingBotton={insets.bottom}
      width={"100%"}
      {...{ backgroundColor }}
    >
      <Box
        flex={1}
        flexDirection={"column"}
        maxHeight={"15%"}
        {...{ backgroundColor }}
      >
        <ReText
          fontFamily="Bold"
          fontSize={32}
          letterSpacing={3}
          testID="title"
          {...{ color }}
        >
          {t("name").toUpperCase()}
        </ReText>
      </Box>
      <Box
        flex={1}
        flexDirection={"column"}
        maxHeight={"30%"}
        {...{ backgroundColor }}
      >
        <ReText {...{ color }} testID="message">
          {t("onboarding.message.welcome")}
        </ReText>
      </Box>
      <Box
        flex={1}
        flexDirection={"column"}
        maxHeight={"15%"}
        {...{ backgroundColor }}
      >
        <LanguagePicker />
      </Box>
      <Box flex={1} flexDirection={"column"} {...{ backgroundColor }}>
        <Box margin={theme.spacing.md} {...{ backgroundColor }}>
          <ReText color={theme.colors.grey2} fontFamily="Light" testID="start">
            {t("onboarding.message.start")}
          </ReText>
        </Box>
        <Box margin={theme.spacing.md} {...{ backgroundColor }}>
          <ReButton
            label={t("common.button.start").toUpperCase()}
            onPress={() => navigation.navigate("Theming")}
          />
        </Box>
      </Box>
    </Box>
  );
};

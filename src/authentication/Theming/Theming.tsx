import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@rneui/themed";

import { Box, ReButton, ReText } from "@ui";

import { ThemePicker } from "../components";

export const Theming = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const backgroundColor = theme.colors.background;
  const color = theme.colors.white;

  return (
    <Box
      flex={1}
      flexDirection={"column"}
      paddingBotton={insets.bottom}
      paddingTop={insets.top}
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
          fontSize={28}
          letterSpacing={3}
          testID="title"
          {...{ color }}
        >
          {t("theming.message.title").toUpperCase()}
        </ReText>
      </Box>
      <Box
        flex={1}
        alignItems={"center"}
        maxHeight={"30%"}
        {...{ backgroundColor }}
      >
        <ReText {...{ color }} testID="favorite">
          {t("theming.message.favorite")}
        </ReText>
      </Box>
      <Box
        flex={1}
        flexDirection={"column"}
        maxHeight={"15%"}
        {...{ backgroundColor }}
      >
        <Box
          flexDirection={"row"}
          margin={theme.spacing.xs}
          testID="picker"
          {...{ backgroundColor }}
        >
          <ThemePicker />
        </Box>
        <Box margin={theme.spacing.xs} {...{ backgroundColor }}>
          <ReText color={theme.colors.grey2} fontFamily="Light" testID="help">
            {t("theming.message.start")}
          </ReText>
        </Box>
      </Box>
      <Box flex={1} {...{ backgroundColor }}>
        <ReButton label={t("common.button.next").toUpperCase()} />
      </Box>
    </Box>
  );
};

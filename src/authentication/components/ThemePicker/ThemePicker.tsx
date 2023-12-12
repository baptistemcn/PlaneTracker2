import { useTranslation } from "react-i18next";
import { useTheme, useThemeMode } from "@rneui/themed";

import { Box, IconButton } from "@ui";
import { THEME } from "@utils";

export const ThemePicker = () => {
  const { theme } = useTheme();
  const { setMode } = useThemeMode();
  const { t } = useTranslation();

  return (
    <>
      {THEME.map((item, index) => (
        <Box
          key={index}
          margin={theme.spacing.lg}
          testID={"themepicker" + index}
        >
          <IconButton
            name={item.name}
            label={t(item.label!)}
            onPress={() => setMode(item.theme!)}
            testID={"picker" + index}
          />
        </Box>
      ))}
    </>
  );
};

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "@rneui/themed";

import { Box, ReImage, ReText, RoundedButton } from "@ui";
import { LANGUAGE } from "@utils";
import { languagePicker } from "@styles";

export const LanguagePicker = () => {
  const margin: number = 42;
  const langPicker = languagePicker();

  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  const [displayLanguage, setDisplayLanguage] = useState<string>(i18n.language);

  const backgroundColor = theme.colors.background;
  const color = theme.colors.white;

  const handleLanguageSelection = (language: string) => {
    i18n.changeLanguage(language);
    setDisplayLanguage(language);
  };

  return (
    <Box flex={1} flexDirection={"column"} {...{ backgroundColor }}>
      <Box
        flex={1}
        flexDirection={"row"}
        testID="button-box"
        {...{ backgroundColor }}
      >
        {LANGUAGE.map((lang, index) => (
          <Box {...{ backgroundColor, margin }} key={index}>
            <RoundedButton
              style={[
                langPicker.button,
                displayLanguage === lang.lang && {
                  backgroundColor: theme.colors.secondary,
                },
              ]}
              onPress={() => handleLanguageSelection(lang.lang)}
              testID={"button" + index}
            >
              <ReImage source={lang.flag} testID={"flag" + index} />
            </RoundedButton>
          </Box>
        ))}
      </Box>
      <ReText {...{ color }}>{t("onboarding.message.language")}</ReText>
    </Box>
  );
};

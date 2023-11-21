import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export const PlaneTracker = () => {
  const { t } = useTranslation();

  return (
    <StyledView className={styles.container}>
      <StyledText>Open up App.tsx to start working on your app!</StyledText>
      <StyledText className={styles.text}>{t("name")}</StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
};

const styles = {
  container: "flex-1 items-center justify-center bg-white",
  text: "line-through",
};

import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import { ReProvider } from "./i18n";

export const Entry = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ReProvider>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{t("name")}</Text>
        <StatusBar style="auto" />
      </ReProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

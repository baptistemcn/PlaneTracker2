import { useEffect } from "react";
import { Alert } from "react-native";
import { useTranslation } from "react-i18next";

import { ReAlertProps } from "@types";

export const ReAlert = ({
  message = "Message",
  title = "Title",
}: ReAlertProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    Alert.alert(t(title), t(message), [
      {
        text: t("alert.button.close"),
        style: "cancel",
      },
    ]);
  }, [message, t, title]);

  return null;
};

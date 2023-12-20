import { memo, useCallback, useEffect } from "react";
import { Alert } from "react-native";
import { useTranslation } from "react-i18next";

import { ReAlertProps } from "@types";

export const ReAlert = memo(
  ({ message = "Message", title = "Title" }: ReAlertProps) => {
    const { t } = useTranslation();

    const translatedTitle = t(title);
    const translatedMessage = t(message);

    const showAlert = useCallback(() => {
      Alert.alert(translatedTitle, translatedMessage, [
        {
          text: t("alert.button.close"),
          style: "cancel",
        },
      ]);
    }, [t, translatedTitle, translatedMessage]);

    useEffect(() => {
      showAlert();
    }, [showAlert]);

    return null;
  },
);

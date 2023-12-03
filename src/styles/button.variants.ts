import { makeStyles } from "@rneui/themed";

export const languagePicker = makeStyles((theme) => ({
  button: {
    borderRadius: 15,
    height: 96,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderWidth: 6,
    borderColor: theme.colors.grey3,
  },
}));

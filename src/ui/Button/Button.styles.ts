import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "SemiBold",
    letterSpacing: 1.5,
  },
}));

import { makeStyles } from "@rneui/themed";
import { Box, ReText } from "@ui";

export const Onboarding = () => {
  const styles = useStyles();
  return (
    <Box styles={styles.container}>
      <ReText>Open up App.tsx to start working on your app!</ReText>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
}));

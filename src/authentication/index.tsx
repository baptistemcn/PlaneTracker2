import { createStackNavigator } from "@react-navigation/stack";
import { AuthRoutes } from "@routes";
import { Box, ReText } from "@ui";

const AuthenticationStack = createStackNavigator<AuthRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{ headerTitle: undefined, headerShadowVisible: false }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ title: "", headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
};

const Onboarding = () => (
  <Box>
    <ReText>Open up App.tsx to start working on your app!</ReText>
  </Box>
);

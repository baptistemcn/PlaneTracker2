import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "@routes";

import { Onboarding } from "./Onboarding";
import { Theming } from "./Theming";
import { useTheme } from "@rneui/themed";
import { SignUp } from "./SignUp";

const AuthenticationStack = createStackNavigator<AuthRoutes>();

export const AuthenticationNavigator = () => {
  const { theme } = useTheme();

  const backgroundColor = theme.colors.background;

  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerTitle: undefined,
        headerShadowVisible: false,
        headerStyle: { ...{ backgroundColor } },
      }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ title: "", headerShown: false }}
      />
      <AuthenticationStack.Screen
        name="Theming"
        component={Theming}
        options={{ title: "" }}
      />
      <AuthenticationStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "" }}
      />
    </AuthenticationStack.Navigator>
  );
};

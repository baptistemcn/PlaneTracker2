import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "@routes";

import { Onboarding } from "./Onboarding";
import { Theming } from "./Theming";

const AuthenticationStack = createStackNavigator<AuthRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerTitle: undefined, headerShadowVisible: false }}
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
    </AuthenticationStack.Navigator>
  );
};

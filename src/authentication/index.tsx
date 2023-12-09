import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "@routes";

import { Onboarding } from "./Onboarding";
import { Themeing } from "./Theming";

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
      <AuthenticationStack.Screen
        name="Themeing"
        component={Themeing}
        options={{ title: "", headerShown: false }}
      />
    </AuthenticationStack.Navigator>
  );
};

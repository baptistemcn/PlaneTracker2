import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationNavigator } from "@authentication";
import { AppRoutes } from "@routes";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator<AppRoutes>();

export const PlaneTracker = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitle: undefined,
          headerShadowVisible: false,
        }}
      >
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
          options={{ title: "", headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

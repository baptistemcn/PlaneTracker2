import { AuthenticationNavigator } from "@authentication";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "@routes";

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

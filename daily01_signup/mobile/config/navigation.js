import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import AppLogin from "../src/components/AppLogin";
import AppRegister from "../src/components/AppRegister";

const NavStack = createStackNavigator();

const NavStackScreen = () => (
  <NavStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <NavStack.Screen
      name="AppRegister"
      component={AppRegister}
    />
    <NavStack.Screen
      name="AppLogin"
      component={AppLogin}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact}`,
        };
      }}
    />
  </NavStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <NavStackScreen />
  </NavigationContainer>
);

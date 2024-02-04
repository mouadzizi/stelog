import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages of Authentification
import OnBoardingView from "../../views/onBoardingView";
import SignIn from "../../views/SignIn/SignIn";
import MainBottomNav from "../../navigation/mainBottomNav";

export default function OnBoardingNav() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onBoardingView"
          component={OnBoardingView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeBottomNav"
          component={MainBottomNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages of Authentification
import Home from "../../views/homeView";
import Details from "../../views/detailsView";

export default function HomeStackNav() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={Details}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

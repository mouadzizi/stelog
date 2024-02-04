import React from "react";
import { COLORS } from "../../../globalStyle.style";
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
        options={{
          title: "detail Command",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

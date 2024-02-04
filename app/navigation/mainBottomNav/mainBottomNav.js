import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../globalStyle.style";

import HomeStackNav from "../../navigation/HomeStackNav";
import AddOrderView from "../../views/addOrdView";

const Tab = createBottomTabNavigator();

export default function MainBottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeStackNav") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "AddOrderView") {
            iconName = focused ? "add-circle-outline" : "add-circle";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddOrderView"
        component={AddOrderView}
        options={{
          title: "Saisie un commande",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
}

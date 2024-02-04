import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../globalStyle.style";

import HomeView from "../../views/homeView";
import addOrderView from "../../views/addOrdView";

const Tab = createBottomTabNavigator();

export default function MainBottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeView") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "addOrderView") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="HomeView" component={HomeView} />
      <Tab.Screen name="addOrderView" component={addOrderView} />
    </Tab.Navigator>
  );
}

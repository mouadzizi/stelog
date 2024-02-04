import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../globalStyle.style";

import HomeStackNav from "../../navigation/HomeStackNav";
import addOrderView from "../../views/addOrdView";

const Tab = createBottomTabNavigator();

export default function MainBottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeStackNav") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "addOrderView") {
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
      <Tab.Screen name="HomeStackNav" component={HomeStackNav} />
      <Tab.Screen name="addOrderView" component={addOrderView} header={false} />
    </Tab.Navigator>
  );
}

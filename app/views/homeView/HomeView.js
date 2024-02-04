import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HomeView.style";
export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
        <Text>Go to the details</Text>
      </TouchableOpacity>
    </View>
  );
}

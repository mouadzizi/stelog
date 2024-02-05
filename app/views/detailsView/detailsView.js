import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import styles from "./detailsView.style";
const DetailsView = ({ route, navigation }) => {
  const { order } = route.params;

  return (
    <ScrollView style={styles.container}>
      {Object.keys(order).map((key) => (
        <View key={key} style={styles.infoContainer}>
          <Text style={styles.infoLabel}>{key}:</Text>
          <Text style={styles.infoText}>{order[key]}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailsView;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./orderComponent.style";

export default function orderComponent({ order, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("OrderDetails", { order: order })}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Tiers : {order.tiers}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Ville:</Text>
          <Text style={styles.infoText}>{order.ville}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>CP:</Text>
          <Text style={styles.infoText}>{order.CP}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>N°Command:</Text>
          <Text style={styles.infoText}>{order.NCommand}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>N°Bon:</Text>
          <Text style={styles.infoText}>{order.NBon}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Date:</Text>
          <Text style={styles.infoText}>{order.Date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

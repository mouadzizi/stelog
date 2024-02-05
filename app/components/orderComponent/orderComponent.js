import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./orderComponent.style";

export default function orderComponent({ order, navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("OrderDetails", { order: order })}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Tiers : {order.selectedCustomer}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Ville:</Text>
            <Text style={styles.infoText}>{order.shippingCity}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>CP:</Text>
            <Text style={styles.infoText}>{order.shippingPostalCode}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>shippingAddress:</Text>
            <Text style={styles.infoText}>{order.shippingAddress}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>shippingPhone:</Text>
            <Text style={styles.infoText}>{order.shippingPhone}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>orderDate:</Text>
            <Text style={styles.infoText}>{order.orderDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
}

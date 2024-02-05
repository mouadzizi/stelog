import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./orderComponent.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDatabase } from "../../contextAPI/databaseContext";

export default function orderComponent({ order, navigation }) {
  const { deleteOrder } = useDatabase();

  const handleDelete = (id) => {
    deleteOrder(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerInfo}
        onPress={() => navigation.navigate("OrderDetails", { order: order })}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Order ID : {order.OrderId}</Text>
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
            <Text style={styles.infoLabel}>adresse :</Text>
            <Text style={styles.infoText}>{order.shippingAddress}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Téléphone :</Text>
            <Text style={styles.infoText}>{order.shippingPhone}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>DDC:</Text>
            <Text style={styles.infoText}>{order.orderDate}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>DDL:</Text>
            <Text style={styles.infoText}>{order.ShippingDate}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={() => handleDelete(order.OrderId)}
      >
        <Icon name="delete" size={35} color={"#fff"} />
        <Text style={styles.buttonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );
}

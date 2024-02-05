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
          <Text style={styles.headerText}>
            Order ID : {order.selectedCustomer}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Ville:</Text>
            <Text style={styles.infoText}>{order.shippingCity}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Code postale de livraison:</Text>
            <Text style={styles.infoText}>{order.shippingPostalCode}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>adresse de livraison:</Text>
            <Text style={styles.infoText}>{order.shippingAddress}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Téléphone d'expédition:</Text>
            <Text style={styles.infoText}>{order.shippingPhone}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>date de commande:</Text>
            <Text style={styles.infoText}>{order.orderDate}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>date de livraison:</Text>
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

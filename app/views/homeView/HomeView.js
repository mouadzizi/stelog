import React from "react";
import { View, Text, Image } from "react-native";
import { useDatabase } from "../../contextAPI/databaseContext";
import OrderComponent from "../../components/orderComponent";
import styles from "./HomeView.style";
export default function HomeView({ navigation }) {
  const { orders, isLoading } = useDatabase();
  const image1 = require("../../assets/cover1.jpg");
  if (isLoading) {
    return (
      <View>
        <Text>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <OrderComponent key={order.OrderId} order={order} />
        ))
      ) : (
        <View style={styles.containerNoOrder}>
          <Image
            source={image1}
            style={styles.ImageStSwiper}
            resizeMode="contain"
          />
          <Text style={styles.containerNoOrderText}>
            Aucune commande disponible, vous pouvez en ajouter !
          </Text>
        </View>
      )}
    </View>
  );
}

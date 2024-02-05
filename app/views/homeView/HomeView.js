import React from "react";
import { View, Text } from "react-native";
import { useDatabase } from "../../contextAPI/databaseContext";
import OrderComponent from "../../components/orderComponent";

export default function HomeView() {
  const { orders, isLoading } = useDatabase();

  if (isLoading) {
    return (
      <View>
        <Text>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <OrderComponent key={order.OrderId} order={order} />
        ))
      ) : (
        <Text>No orders available</Text>
      )}
    </View>
  );
}

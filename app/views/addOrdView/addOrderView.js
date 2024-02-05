import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDatabase } from "../../contextAPI/databaseContext";
import styles from "./addOrderView.style";

export default function AddOrderView({ navigation }) {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [shippingDate, setShippingDate] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");
  const [shippingPostalCode, setShippingPostalCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");

  const { customers, addOrder } = useDatabase(); // Assuming customers is an array of customers

  const handleAddOrder = () => {
    const orderData = {
      selectedCustomer,
      orderDate,
      shippingDate,
      shippingName,
      shippingAddress,
      shippingCity,
      shippingRegion,
      shippingPostalCode,
      shippingCountry,
      shippingPhone,
    };

    addOrder(orderData);

    // Additional logic or navigation if needed
    navigation.goBack(); // Assuming you want to go back after adding the order
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Order Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ID Customer"
          value={selectedCustomer}
          onChangeText={setSelectedCustomer}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Order Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Order Date"
          value={orderDate}
          onChangeText={setOrderDate}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Date"
          value={shippingDate}
          onChangeText={setShippingDate}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Name"
          value={shippingName}
          onChangeText={setShippingName}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Address"
          value={shippingAddress}
          onChangeText={setShippingAddress}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping City:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping City"
          value={shippingCity}
          onChangeText={setShippingCity}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Region:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Region"
          value={shippingRegion}
          onChangeText={setShippingRegion}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Postal Code:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Postal Code"
          value={shippingPostalCode}
          onChangeText={setShippingPostalCode}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Country:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Country"
          value={shippingCountry}
          onChangeText={setShippingCountry}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Shipping Phone"
          value={shippingPhone}
          onChangeText={setShippingPhone}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddOrder}>
        <Text style={styles.addButtonText}>Add Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

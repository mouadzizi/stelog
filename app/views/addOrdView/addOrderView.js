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
import { Picker } from "@react-native-picker/picker";

export default function AddOrderView({ navigation }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderDate, setOrderDate] = useState("");
  const [shippingDate, setShippingDate] = useState("");
  const [shippingName, setShippingName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingRegion, setShippingRegion] = useState("");
  const [shippingPostalCode, setShippingPostalCode] = useState("");
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingPhone, setShippingPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const { customers, addOrder, products } = useDatabase();

  const handleAddOrder = () => {
    const orderData = {
      selectedCustomer,
      selectedProduct,
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

    //to clear all the fields
    setSelectedCustomer("");
    setSelectedProduct(null);
    setOrderDate("");
    setShippingDate("");
    setShippingName("");
    setShippingAddress("");
    setShippingCity("");
    setShippingRegion("");
    setShippingPostalCode("");
    setShippingCountry("");
    setShippingPhone("");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.section}>
          <Text style={styles.label}>Select Customer:</Text>
          <Picker
            selectedValue={selectedCustomer}
            onValueChange={(itemValue) => setSelectedCustomer(itemValue)}
          >
            <Picker.Item label="Select Customer" value={null} />
            {customers &&
              customers.map((customer) => (
                <Picker.Item
                  key={customer.CustomerId}
                  label={customer.CompanyName}
                  value={customer.CompanyName}
                />
              ))}
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Select Product:</Text>
          <Picker
            selectedValue={selectedProduct}
            onValueChange={(itemValue) => setSelectedProduct(itemValue)}
          >
            <Picker.Item label="Select Product" value={null} />
            {products &&
              products.map((product) => (
                <Picker.Item
                  key={product.ProductId}
                  label={product.ProductName}
                  value={product.ProductId}
                />
              ))}
          </Picker>
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
    </View>
  );
}

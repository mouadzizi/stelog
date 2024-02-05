import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./addOrderView.style";

export default function AddOrderView({ navigation }) {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [date, setDate] = useState(new Date());
  const [shippingDate, setShippingDate] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [open, setOpen] = useState(false);

  const customers = [
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
  ];

  const articles = [
    { id: 101, name: "Article 1" },
    { id: 102, name: "Article 2" },
  ];

  const handleAddCommand = () => {
    Alert.alert("Command Added:");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Customer:</Text>
        <Picker
          selectedValue={selectedCustomer}
          onValueChange={(itemValue) => setSelectedCustomer(itemValue)}
        >
          <Picker.Item label="Select Customer" value={null} />
          {customers.map((customer) => (
            <Picker.Item
              key={customer.id}
              label={customer.name}
              value={customer.id}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Articles:</Text>
        {articles.map((article) => (
          <TouchableOpacity
            key={article.id}
            style={[
              styles.articleButton,
              selectedArticles.includes(article.id) && styles.selectedArticle,
            ]}
            onPress={() => {
              const updatedArticles = selectedArticles.includes(article.id)
                ? selectedArticles.filter((id) => id !== article.id)
                : [...selectedArticles, article.id];
              setSelectedArticles(updatedArticles);
            }}
          >
            <Text style={styles.articleButtonText}>{article.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Shipping Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Date"
          keyboardType="numeric"
          value={date}
          onChangeText={setDate}
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

      <TouchableOpacity style={styles.addButton} onPress={handleAddCommand}>
        <Text style={styles.addButtonText}>Add Command</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

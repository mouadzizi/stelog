import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import OrderComponent from "../../components/orderComponent";

export default function HomeView({ navigation }) {
  const data = [
    {
      tiers: "A2313saSQDQ",
      ville: "Paris",
      CP: 92250,
      NCommand: "pad21",
      NBon: 251,
      Date: "30/01/2024",
    },
    {
      tiers: "A2313SasQDQ",
      ville: "Paris",
      CP: 92250,
      NCommand: "pad21",
      NBon: 251,
      Date: "30/01/2024",
    },
    {
      tiers: "A2313SsaQDQ",
      ville: "Paris",
      CP: 92250,
      NCommand: "pad21",
      NBon: 251,
      Date: "30/01/2024",
    },

    {
      tiers: "A2313SsaQDQ",
      ville: "Paris",
      CP: 92250,
      NCommand: "pad21",
      NBon: 251,
      Date: "30/01/2024",
    },

    {
      tiers: "A2313SsaQDQ",
      ville: "Paris",
      CP: 92250,
      NCommand: "pad21",
      NBon: 251,
      Date: "30/01/2024",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <OrderComponent order={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
}

import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountItemComponent from "../components/AccountItemComponent";

const AccountData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "My Listings",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "My Messages",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Logout",
  },
];

const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={AccountData}
        renderItem={({ item }) => <AccountItemComponent title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

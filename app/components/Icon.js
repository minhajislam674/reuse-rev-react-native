import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Icon = ({ name, size, color = "#fff", backgroundColor }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name={name} size={24} color={color} />
    </View>
  );
};

export default Icon;

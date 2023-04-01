import React from "react";
import { Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    padding: 15,
  },
});

export default ButtonComponent;

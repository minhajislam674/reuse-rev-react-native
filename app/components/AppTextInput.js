import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.textInput} name={icon} />
      <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    marginRight: 10,
    fontSize: 20,
  },
});

export default AppTextInput;

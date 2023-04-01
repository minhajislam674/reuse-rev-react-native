import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 10 }}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  image: {
    width: "100%",
  },
  details: {
    padding: 20,
  },
});

export default Card;

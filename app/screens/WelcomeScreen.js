import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import ButtonComponent from "../components/ButtonComponent";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginTop: 50,
        }}
        source={require("../assets/icon-logo.png")}
      />
      <Text style={styles.title}>Welcome to the App!</Text>
      <ButtonComponent title="Login" onPress={() => console.log("TAP")} />
      <ButtonComponent title="Register" onPress={() => console.log("TAP")} />
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
});

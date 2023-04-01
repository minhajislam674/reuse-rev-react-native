import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  View,
} from "react-native";

import {
  useImageDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

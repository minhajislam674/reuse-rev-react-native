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

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <Card
        title="House items for sale!"
        subTitle="$100"
        image={require("./app/assets/furniture.jpg")}
      />
    </Screen>
  );
}

import React, { useState } from "react";
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
  TextInput,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import Icon from "./app/components/Icon";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Categories"
        icon="apps"
      />
      <AppTextInput icon="search" placeholder="search" />
    </Screen>
  );
}

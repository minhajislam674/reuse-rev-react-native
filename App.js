import React, { useState } from "react";
import { Button } from "react-native";
import { Alert } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  // return <ListingEditScreen />;
  // return <MessagesScreen />;
  // return <WelcomeScreen />;
  // return <RegisterScreen />;
  // return <LoginScreen />;
  // return <ListingsScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <AccountScreen />;

  const handleAddImage = (uri) => {
    if (imageUris.length === 5) {
      Alert.alert("Limit reached!", "You can't add more than 5 images.");
      return;
    }
    setImageUris([...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </>
  );
}

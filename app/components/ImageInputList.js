import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {imageUris.map((uri) => {
          return (
            <View style={styles.imageContainer} key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          );
        })}
        <ImageInput
          imageUris={imageUris}
          onChangeImage={(uri) => onAddImage(uri)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    marginRight: 10,
  },
});

export default ImageInputList;

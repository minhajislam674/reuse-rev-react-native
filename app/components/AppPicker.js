import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Ionicons style={styles.textInput} name={icon} />
          <Text style={styles.text}>
            {" "}
            {selectedItem ? selectedItem.label : placeholder}{" "}
          </Text>
          <Ionicons name="chevron-down" size={26} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
    fontSize: 24,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

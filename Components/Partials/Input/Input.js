import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

const Input = ({ Icon, Place, Type, SecureEntry, setProp }) => {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Icon}
        source={
          Icon === "User"
            ? require("../../../assets/icons/User.png")
            : Icon === "Lock"
            ? require("../../../assets/icons/Lock.png")
            : Icon === "Mail"
            ? require("../../../assets/icons/Mail.png")
            : require("../../../assets/icons/User.png")
        }
      />
      <TextInput
        style={styles.InputStyle}
        editable
        placeholder={Place}
        keyboardType={Type}
        secureTextEntry={SecureEntry}
        onChangeText={(newValue) => setProp(newValue)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputStyle: {
    width: 300,
    height: 50,
    padding: 10,
    // backgroundColor: "red",
  },
  Container: {
    width: 340,
    backgroundColor: Colors.Dirty_White_Darker,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  Icon: {
    width: 24,
    height: 24,
    resizeMode: "center",
    marginLeft: 10,
    marginRight: 5,
  },
});

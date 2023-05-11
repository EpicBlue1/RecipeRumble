import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

const ProfileSubmissions = () => {
  return (
    <View>
      <ImageBackground
        style={styles.Container}
        source={require("../../../assets/Test.png")}
      ></ImageBackground>
      <Text style={styles.Bottom}>255</Text>
    </View>
  );
};

export default ProfileSubmissions;

const styles = StyleSheet.create({
  Container: {
    width: 100,
    height: 75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  Bottom: {
    width: 100,
    height: 25,
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: Colors.Green,
    padding: 3,
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

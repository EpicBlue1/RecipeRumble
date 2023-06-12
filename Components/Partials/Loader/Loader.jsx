import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

const Loader = () => {
  return (
    <View style={styles.Loading}>
      <ImageBackground
        ref={(image) => {
          this.sectorImage = image;
        }}
        style={{
          width: 58,
          height: 58,
        }}
        source={require("../../../assets/icons/Loading.gif")}
      ></ImageBackground>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  Loading: {
    width: 65,
    height: 65,
    backgroundColor: Colors.Dirty_White_Darker,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Global } from "../../../Utils/GlobalStyles";
import { ButtonStyles } from "./ButtonStyles";

const Button = ({ ButText, ButtonType, OnPress }) => {
  return (
    <TouchableOpacity
      OnPress={OnPress}
      style={
        ButtonType === "Primary"
          ? ButtonStyles.primary
          : ButtonType === "Secondary"
          ? ButtonStyles.secondary
          : ""
      }
    >
      <Text style={Global.ButtonFont}>{ButText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

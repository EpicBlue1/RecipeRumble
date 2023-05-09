import { StyleSheet } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

export const ButtonStyles = StyleSheet.create({
  primary: {
    width: 320,
    height: 55,
    backgroundColor: Colors.Green,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
  },
  secondary: {
    width: 320,
    height: 55,
    backgroundColor: Colors.Dirty_White,
    borderWidth: 3,
    borderColor: Colors.Red,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
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
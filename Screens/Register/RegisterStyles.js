import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const LoginStyles = StyleSheet.create({
  Container: {},
  Image: {
    height: 165,
    width: null,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    width: 110,
    height: 110,
  },
  BottomContainer: {
    height: 600,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  Account: {
    fontFamily: "ubuntu_regular",
    fontSize: 20,
    color: Colors.Gray,
  },
  AccountBold: {
    fontFamily: "ubuntu_bold",
    fontSize: 20,
    width: 80,
    textAlign: "right",
    color: Colors.Red,
  },
  InputContainer: {
    height: 260,
    justifyContent: "space-between",
  },
});

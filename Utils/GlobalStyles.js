import { StyleSheet } from "react-native";
import { Colors } from "./ReUsables";

export const Global = StyleSheet.create({
  HeadingOne: {
    fontFamily: "ubuntu_bold",
    fontSize: 38,
    color: Colors.Gray,
  },
  HeadingTwo: {
    fontFamily: "ubuntu_bold",
    fontSize: 28,
    color: Colors.Gray,
  },
  HeadingThree: {
    fontFamily: "ubuntu_italic",
    fontSize: 22,
    color: Colors.Gray,
  },
  ButtonFont: {
    fontFamily: "karla_bold",
    fontSize: 20,
    color: Colors.Gray,
  },
  CompetitionFont: {
    fontFamily: "karla_italic",
    fontSize: 18,
    color: Colors.Gray,
  },
  Paragraph: {
    fontFamily: "karla",
    fontSize: 14,
    color: Colors.Gray,
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  InputStyle: {
    width: 320,
    height: 50,
    backgroundColor: Colors.Dirty_White_Darker,
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
    // shadowColor: "#464646",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.08,
    // shadowRadius: 5,
    // elevation: 5,
  },
});

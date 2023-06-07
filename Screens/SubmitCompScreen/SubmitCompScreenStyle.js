import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const SubmitScreenStyle = StyleSheet.create({
  Container: {},
  Image: {
    height: 140,
    width: null,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    paddingTop: 60,
  },
  InfoContainer: {
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.Dirty_White,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

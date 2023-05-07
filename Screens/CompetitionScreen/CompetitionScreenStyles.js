import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const CompStyles = StyleSheet.create({
  Container: {
    // padding: 20,
  },
  Image: {
    height: 180,
    width: null,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Icon: {
    width: 24,
    height: 24,
  },
  IconButt: {
    width: 32,
    height: 32,
    borderRadius: 10,
  },
  IconButtBack: {
    width: 55,
    height: 55,
    backgroundColor: Colors.Dirty_White_Dark,
    borderRadius: 10,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: 60,
    height: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  BottomContainer: {
    height: 520,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ButtonVoteSub: {
    width: null,
    height: 90,
    backgroundColor: Colors.Dirty_White_Dark,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
  Description: {
    height: 120,
  },
  ButtonText: {
    width: 125,
  },
});

import { StyleSheet } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

export const CompetitionBoxStyles = StyleSheet.create({
  Container: {
    width: "42%",
    height: 200,
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
    justifyContent: "space-around",
    float: "left",
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  Image: {
    width: "80%",
    height: 80,
    borderRadius: 10,
  },
  Icon: {
    width: 24,
    height: 24,
  },
  innerContainer: {
    width: "80%",
    height: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  HorSpacer: {
    width: 25,
  },
});

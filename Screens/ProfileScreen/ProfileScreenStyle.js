import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const ProfileStyles = StyleSheet.create({
  image: {
    height: 210,
  },
  InnerContainer: {
    width: null,
    height: 210,
    backgroundColor: "rgba(97, 94, 99, 0.5)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Profile: {
    width: 85,
    height: 85,
    borderRadius: 100,
    alignSelf: "center",
  },
  white: {
    color: Colors.Dirty_White,
  },
  BottomContainer: {
    padding: 20,
    alignItems: "center",
  },
  ParticipantsResults: {
    height: 180,
  },
  innerContainerScroll: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
  Competitions: {
    marginTop: 30,
    height: 380,
    // width: 320,
  },
});

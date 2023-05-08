import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const HomeStyles = StyleSheet.create({
  Container: {
    padding: 20,
    height: 780,
    display: "flex",
    justifyContent: "space-between",
  },
  TopContainer: {
    width: null,
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  Intro: {
    width: 200,
  },
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 10,
  },
  Competitions: {
    width: null,
    height: 400,
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
    height: 80,
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
  innerContainerScroll: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

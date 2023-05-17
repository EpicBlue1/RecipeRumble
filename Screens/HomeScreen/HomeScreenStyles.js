import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const HomeStyles = StyleSheet.create({
  Container: {
    // padding: 20,
    paddingTop: 30,
    justifyContent: "space-between",
  },
  TopContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    width: null,
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
  },
  Intro: {
    width: 200,
    marginLeft: "10%",
  },
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  Competitions: {
    width: null,
    marginTop: 5,
    // paddingBottom: 60,
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
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  ButtonVoteSub: {
    marginTop: 15,
    marginBottom: 20,
    width: "100%",
    height: 90,
    backgroundColor: Colors.Dirty_White_Darker,
    borderRadius: 10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
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
    justifyContent: "space-between",
  },
});

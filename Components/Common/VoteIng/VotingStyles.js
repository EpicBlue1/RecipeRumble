import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../Utils/ReUsables";

export const VotingStyles = StyleSheet.create({
  Container: {
    // height: 270,
    backgroundColor: Colors.Dirty_White_Dark,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  ContainerTall: {
    height: 340,
    backgroundColor: Colors.Dirty_White_Dark,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  Icon: {
    width: 36,
    height: 36,
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  IconOne: {
    width: 36,
    height: 36,
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    shadowColor: "#464646",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  Overlay: {
    width: null,
    height: 200,
    padding: 20,
    borderRadius: 10,
  },
  Voted: {
    backgroundColor: "rgba(97, 94, 99, 0.6)",
  },
  Hide: {
    display: "none",
  },
  Heart: {
    width: 92,
    height: 92,
  },
  HeartContainer: {
    width: 200,
    height: 115,
    marginTop: 15,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  IconsContainer: {
    width: null,
    // marginTop: 20,
    height: 38,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  VotedText: {
    color: Colors.Dirty_White,
    textAlign: "center",
  },
  Description: {
    width: 360,
    padding: 10,
    height: 70,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  DescriptionTall: {
    width: 360,
    padding: 10,
    height: 140,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

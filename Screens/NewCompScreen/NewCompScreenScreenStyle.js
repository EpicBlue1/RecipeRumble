import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Utils/ReUsables";

export const NewCompScreenStyle = StyleSheet.create({
  Container: {},
  Image: {
    height: 160,
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
  IngredientsContainer: {
    marginVertical: 20,
    width: "90%",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 20,
  },
  InputContainer: {
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    // height: 600,
    justifyContent: "space-between",
  },
  IngredientView: {
    margin: 2,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.Green,
    borderRadius: 15,
    justifyContent: "center",
  },
  addImage: {
    width: 300,
    backgroundColor: "red",
    alignSelf: "center",
    height: 150,
    resizeMode: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  addImageInner: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  StepsContainer: {
    marginVertical: 20,
    width: "90%",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    marginBottom: 20,
  },
  StepsView: {
    width: "100%",
    margin: 2,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.Red,
    borderRadius: 15,
    justifyContent: "center",
  },
});

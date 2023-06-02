import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultsTopBox from "../../Components/Common/ResultsTopBox/ResultsTopBox";
import Button from "../../Components/Partials/Button/Button";
import { Global } from "../../Utils/GlobalStyles";
import { ResultsStyles } from "./ResultsScreenStyles";

const ResultsScreen = () => {
  return (
    <View style={ResultsStyles.Container}>
      <ImageBackground
        style={ResultsStyles.Image}
        source={require("../../assets/Test.png")}
      >
        <Text style={Global.HeadingOne}>Title</Text>
        <Text style={Global.HeadingThree}>Results</Text>
      </ImageBackground>
      <View style={ResultsStyles.BottomContainer}>
        <Text style={Global.HeadingTwo}>Top 3 Dishes:</Text>
        <ResultsTopBox />
        <ResultsTopBox />
        <ResultsTopBox />
      </View>
      <View style={ResultsStyles.Butt}>
        <Button ButtonType={"Primary"} />
      </View>
    </View>
  );
};

export default ResultsScreen;

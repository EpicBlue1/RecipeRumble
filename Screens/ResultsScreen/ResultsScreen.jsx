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
import { Global } from "../../Utils/GlobalStyles";
import { ResultsStyles } from "./ResultsScreenStyles";

const ResultsScreen = () => {
  return (
    <View style={ResultsStyles.Container}>
      <ScrollView>
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

          <View style={ResultsStyles.SubmissionSection}>
            <Text style={Global.HeadingTwo}>Participants</Text>
            <Text style={Global.HeadingTwo}>Score</Text>
          </View>
          <View style={ResultsStyles.ParticipantsResults}>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
            <View style={ResultsStyles.ResultsSection}>
              <Text style={Global.HeadingThree}>Name</Text>
              <Text style={Global.HeadingThree}>180</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultsScreen;

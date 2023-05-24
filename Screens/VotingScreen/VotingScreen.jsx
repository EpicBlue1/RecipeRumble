import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import CompetitionBox from "../../Components/Common/CompetitionBox/CompetitionBox";
import Voting from "../../Components/Common/VoteIng/Voting";
import BackButton from "../../Components/Partials/BackButton/BackButton";
import Button from "../../Components/Partials/Button/Button";
import { Global } from "../../Utils/GlobalStyles";
import CompetitionScreen from "../CompetitionScreen/CompetitionScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import { VotingScreenStyles } from "./VotingScreenStyles";

const VotingScreen = () => {
  return (
    <View style={VotingScreenStyles.Container}>
      <View style={VotingScreenStyles.TopContainer}>
        <BackButton />
        <View style={{ width: null, paddingLeft: "10%" }}>
          <Text style={Global.HeadingTwo}>Competition Title</Text>
          <Text style={Global.HeadingThree}>Voting</Text>
        </View>
      </View>
      <ScrollView>
        <View style={VotingScreenStyles.BottomContainer}>
          <Voting />
          <Voting />
          <Voting />
          <Voting />
          <Voting />
          <View
            style={{
              height: 130,
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <Text style={Global.HeadingThree}>The end!</Text>
            <Button ButtonType={"Primary"} ButText={"Return to competition"} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VotingScreen;

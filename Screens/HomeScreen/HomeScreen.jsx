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
import { Global } from "../../Utils/GlobalStyles";
import { HomeStyles } from "./HomeScreenStyles";

const HomeScreen = () => {
  return (
    <View style={HomeStyles.Container}>
      <ScrollView>
        <View style={HomeStyles.TopContainer}>
          <ImageBackground
            style={HomeStyles.Logo}
            source={require("../../assets/Logo.png")}
          />
          <Text style={[Global.HeadingTwo, HomeStyles.Intro]}>
            Welcome back Reinhardt
          </Text>
        </View>

        <Text style={Global.HeadingTwo}>Next Event:</Text>

        <TouchableOpacity style={HomeStyles.ButtonVoteSub}>
          <ImageBackground
            style={HomeStyles.IconButt}
            source={require("../../assets/icons/HeartDark.png")}
          />
          <View>
            <Text style={[Global.HeadingTwo, HomeStyles.ButtonText]}>
              5h 32m
            </Text>
            <Text style={[Global.Paragraph, HomeStyles.ButtonText]}>
              Something sweet
            </Text>
          </View>
          <View style={HomeStyles.IconButtBack}>
            <ImageBackground
              style={HomeStyles.IconButt}
              source={require("../../assets/icons/Play.png")}
            />
          </View>
        </TouchableOpacity>

        <Text style={Global.HeadingTwo}>Competitions:</Text>
        <View style={HomeStyles.Competitions}>
          <View style={HomeStyles.innerContainerScroll}>
            <CompetitionBox></CompetitionBox>
            <CompetitionBox></CompetitionBox>
            <CompetitionBox></CompetitionBox>
            <CompetitionBox></CompetitionBox>
            <CompetitionBox></CompetitionBox>
            <CompetitionBox></CompetitionBox>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

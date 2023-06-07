import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useMemo, useState } from "react";
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
import {
  CompetitionData,
  getAllCompetitions,
} from "../../Services/CompetitionService";
import { GetCurrentUser } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { HomeStyles } from "./HomeScreenStyles";

const HomeScreen = () => {
  const [Competitions, setCompetitions] = useState([]);

  // const Data = useMemo(() => {
  //   return Competitions;
  // }, [Competitions]);

  useFocusEffect(
    useCallback(() => {
      //get data when viewing screen
      getAll();
      return () => {
        //clean up
        console.log("not in view");
      };
    }, [])
  );

  const getAll = async () => {
    console.log("getting data");
    const allCompetitions = await getAllCompetitions();
    setCompetitions(allCompetitions);
  };

  const user = GetCurrentUser();
  console.log(user);

  return (
    <View style={HomeStyles.Container}>
      <ScrollView>
        <View style={HomeStyles.TopContainer}>
          <ImageBackground
            style={HomeStyles.Logo}
            source={require("../../assets/Logo.png")}
          />
          <Text style={[Global.HeadingTwo, HomeStyles.Intro]}>
            Welcome back {user.displayName}
          </Text>
        </View>

        <View style={HomeStyles.BottomContainer}></View>

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
            {Competitions.map((item, index) => {
              return <CompetitionBox key={index} CompData={item} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

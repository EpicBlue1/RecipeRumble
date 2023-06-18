import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../Components/Partials/BackButton/BackButton";
import { getSubmissionsById } from "../../Services/CompetitionService";
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { NewCompScreenStyle } from "../NewCompScreen/NewCompScreenScreenStyle";
import { IndRecipeScreenStyles } from "./IndRecipeScreenStyles";

const CompetitionScreen = ({ route, navigation }) => {
  const project = route.params.CompData;
  console.log(project);

  const deviceDateTime = new Date();
  const CompEndDate = new Date(project.EndDate);
  const CompStartDate = new Date(project.StartDate);

  console.log(deviceDateTime);
  console.log(CompEndDate);

  const date1 = new Date(deviceDateTime);
  const date2 = new Date(CompEndDate);

  const timeDifference = CompEndDate.getTime() - deviceDateTime.getTime();
  const totalTimeSpan = CompEndDate.getTime() - CompStartDate.getTime();

  const remainingTime = totalTimeSpan - timeDifference;
  const percentageProgress = (remainingTime / totalTimeSpan) * 100;

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

  const [Competitions, setCompetitions] = useState([]);
  const [Loading, setLoading] = useState(false);

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
    setLoading(true);
    console.log("getting data");
    const allCompetitions = await getSubmissionsById(project.CompId);
    setCompetitions(allCompetitions);
    console.log(allCompetitions);
  };

  const imageSource = {
    uri: project.Image,
  };

  let CompDate = new Date();
  CompDate.setDate();

  return (
    <View style={IndRecipeScreenStyles.Container}>
      <ScrollView>
        <ImageBackground
          style={IndRecipeScreenStyles.Image}
          source={imageSource}
        >
          <BackButton />
          <View style={IndRecipeScreenStyles.InfoContainer}>
            <Text style={Global.HeadingTwo}>{project.EventName}</Text>
            <View style={IndRecipeScreenStyles.innerContainer}>
              <Image
                style={IndRecipeScreenStyles.Icon}
                source={require("../../assets/icons/Two-user.png")}
              />
              <Text style={Global.Paragraph}>
                {Competitions.length === 0 ? 0 : Competitions.length}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={IndRecipeScreenStyles.BottomContainer}>
          <View style={IndRecipeScreenStyles.Description}>
            {/* <ScrollView > */}
            <Text style={[Global.Paragraph]}>{project.Description}</Text>
            {/* </ScrollView> */}
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              alignSelf: "center",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />

          <Text style={Global.HeadingTwo}>Requirements</Text>
          <View style={NewCompScreenStyle.IngredientsContainer}>
            {project.Requirements.map((Item, index) => (
              <View key={index} style={NewCompScreenStyle.IngredientView}>
                <Text>{Item}</Text>
              </View>
            ))}
          </View>
          <Text style={Global.HeadingTwo}>Rules</Text>
          <View style={NewCompScreenStyle.StepsContainer}>
            {project.Rules.map((Item, index) => (
              <View key={index} style={NewCompScreenStyle.StepsView}>
                <Text>
                  {index + 1}. {Item}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              alignSelf: "center",

              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />

          <View style={IndRecipeScreenStyles.SubmissionSection}>
            <Text style={Global.HeadingTwo}>Submissions:</Text>
            <Text style={Global.HeadingTwo}>
              {" "}
              {Competitions.length === 0 ? 0 : Competitions.length}
            </Text>
          </View>

          <Text style={Global.HeadingThree}>
            {date1 < date2
              ? `${daysLeft} day(s), ${hoursLeft} hours left`
              : "Competition dusted!"}
          </Text>

          <View style={date1 < date2 ? "" : IndRecipeScreenStyles.hide}>
            <View style={IndRecipeScreenStyles.ProgressOuter}>
              <View
                style={[
                  IndRecipeScreenStyles.ProgressInner,
                  {
                    width: `${percentageProgress.toFixed(2)}%`,
                    backgroundColor:
                      percentageProgress.toFixed(2) < 75
                        ? Colors.Green
                        : Colors.Red,
                  },
                ]}
              ></View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Voting", { project })}
              style={IndRecipeScreenStyles.ButtonVoteSub}
            >
              <ImageBackground
                style={IndRecipeScreenStyles.IconButt}
                source={require("../../assets/icons/HeartDark.png")}
              />
              <Text
                style={[Global.HeadingTwo, IndRecipeScreenStyles.ButtonText]}
              >
                Vote
              </Text>
              <View style={IndRecipeScreenStyles.IconButtBack}>
                <ImageBackground
                  style={IndRecipeScreenStyles.IconButt}
                  source={require("../../assets/icons/Play.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SubmitComp", { project })}
              style={IndRecipeScreenStyles.ButtonVoteSub}
            >
              <ImageBackground
                style={IndRecipeScreenStyles.IconButt}
                source={require("../../assets/icons/HeartDark.png")}
              />
              {/* TODO only one submission allowed*/}
              <Text
                style={[Global.HeadingTwo, IndRecipeScreenStyles.ButtonText]}
              >
                Submit
              </Text>
              <View style={IndRecipeScreenStyles.IconButtBack}>
                <ImageBackground
                  style={IndRecipeScreenStyles.IconButt}
                  source={require("../../assets/icons/Play.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={date1 < date2 ? IndRecipeScreenStyles.hide : ""}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { project })}
              style={IndRecipeScreenStyles.ButtonVoteSub}
            >
              {/* TODO only one submission allowed*/}
              <Text
                style={[Global.HeadingTwo, IndRecipeScreenStyles.ButtonTextTwo]}
              >
                LeaderBoard
              </Text>
              <View style={IndRecipeScreenStyles.IconButtBack}>
                <ImageBackground
                  style={IndRecipeScreenStyles.IconButt}
                  source={require("../../assets/icons/Sort.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompetitionScreen;

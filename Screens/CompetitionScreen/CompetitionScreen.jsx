import React, { useEffect, useMemo } from "react";
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
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { NewCompScreenStyle } from "../NewCompScreen/NewCompScreenScreenStyle";
import { CompStyles } from "./CompetitionScreenStyles";

const CompetitionScreen = ({ route, navigation }) => {
  const project = route.params.CompData;

  const imageSource = {
    uri: project.Image,
  };

  let CompDate = new Date();
  CompDate.setDate();

  return (
    <View style={CompStyles.Container}>
      <ScrollView>
        <ImageBackground style={CompStyles.Image} source={imageSource}>
          <BackButton />
          <View style={CompStyles.InfoContainer}>
            <Text style={Global.HeadingTwo}>{project.EventName}</Text>
            <Text style={Global.HeadingThree}>Name and surname</Text>
            <View style={CompStyles.innerContainer}>
              <Image
                style={CompStyles.Icon}
                source={require("../../assets/icons/Two-user.png")}
              />
              <Text style={Global.Paragraph}>
                {/* {project.participants.length === 0
                  ? 0
                  : project.participants.length} */}
                0
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={CompStyles.BottomContainer}>
          <View style={CompStyles.Description}>
            {/* <ScrollView > */}
            <Text style={[Global.Paragraph]}>{project.Description}</Text>
            {/* </ScrollView> */}
          </View>

          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
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
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />

          <View style={CompStyles.SubmissionSection}>
            <Text style={Global.HeadingTwo}>Submissions:</Text>
            <Text style={Global.HeadingTwo}> 0</Text>
          </View>

          <Text style={Global.HeadingThree}>1d 5h 32m left</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Voting")}
            style={CompStyles.ButtonVoteSub}
          >
            <ImageBackground
              style={CompStyles.IconButt}
              source={require("../../assets/icons/HeartDark.png")}
            />
            <Text style={[Global.HeadingTwo, CompStyles.ButtonText]}>Vote</Text>
            <View style={CompStyles.IconButtBack}>
              <ImageBackground
                style={CompStyles.IconButt}
                source={require("../../assets/icons/Play.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SubmitComp", { project })}
            style={CompStyles.ButtonVoteSub}
          >
            <ImageBackground
              style={CompStyles.IconButt}
              source={require("../../assets/icons/HeartDark.png")}
            />
            {/* TODO only one submission allowed*/}
            <Text style={[Global.HeadingTwo, CompStyles.ButtonText]}>
              Submit
            </Text>
            <View style={CompStyles.IconButtBack}>
              <ImageBackground
                style={CompStyles.IconButt}
                source={require("../../assets/icons/Play.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompetitionScreen;

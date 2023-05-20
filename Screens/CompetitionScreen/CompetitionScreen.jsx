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
import { CompStyles } from "./CompetitionScreenStyles";

const CompetitionScreen = ({ route, navigation }) => {
  const project = route.params.CompData;

  const imageSource = {
    uri: project.competitionImage,
  };

  let CompDate = new Date();
  CompDate.setDate();
  // console.log(delta);

  return (
    <View style={CompStyles.Container}>
      <ScrollView>
        <ImageBackground style={CompStyles.Image} source={imageSource}>
          <BackButton />
          <Text style={Global.HeadingOne}>{project.competitionName}</Text>
          <Text style={Global.HeadingThree}>Name and surname</Text>
          <View style={CompStyles.innerContainer}>
            <Image
              style={CompStyles.Icon}
              source={require("../../assets/icons/Two-user.png")}
            />
            <Text style={Global.Paragraph}>
              {project.participants.length === 0
                ? 0
                : project.participants.length}
            </Text>
          </View>
        </ImageBackground>
        <View style={CompStyles.BottomContainer}>
          <View style={CompStyles.Description}>
            {/* <ScrollView > */}
            <Text style={[Global.Paragraph]}>{project.description}</Text>
            {/* </ScrollView> */}
          </View>

          <View style={CompStyles.SubmissionSection}>
            <Text style={Global.HeadingTwo}>Submissions:</Text>
            <Text style={Global.HeadingTwo}>{project.submissions.length}</Text>
          </View>

          <Text style={Global.HeadingThree}>1d 5h 32m left</Text>

          <TouchableOpacity style={CompStyles.ButtonVoteSub}>
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

          <TouchableOpacity style={CompStyles.ButtonVoteSub}>
            <ImageBackground
              style={CompStyles.IconButt}
              source={require("../../assets/icons/HeartDark.png")}
            />
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

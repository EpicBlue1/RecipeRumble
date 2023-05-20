import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Global } from "../../../Utils/GlobalStyles";
import { CompetitionBoxStyles } from "./CompetitionBoxStyles";

const CompetitionBox = ({ CompData, route }) => {
  const imageSource = {
    uri: CompData.competitionImage,
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Competitions", { CompData })}
      style={CompetitionBoxStyles.Container}
    >
      <Image style={CompetitionBoxStyles.Image} source={imageSource} />
      <Text style={Global.CompetitionFont}>{CompData.competitionName}</Text>
      <View style={CompetitionBoxStyles.innerContainer}>
        <Image
          style={CompetitionBoxStyles.Icon}
          source={require("../../../assets/icons/Two-user.png")}
        />
        <Text style={Global.Paragraph}>{CompData.submissions.length}</Text>
        <View style={CompetitionBoxStyles.HorSpacer}></View>
        <Image
          style={CompetitionBoxStyles.Icon}
          source={require("../../../assets/icons/Play.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CompetitionBox;

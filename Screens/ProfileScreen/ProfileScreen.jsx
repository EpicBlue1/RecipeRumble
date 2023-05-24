import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProfileSubmissions from "../../Components/Common/ProfileSubmissions/ProfileSubmissions";
import Button from "../../Components/Partials/Button/Button";
import { GetCurrentUser, LogOut } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { HomeStyles } from "../HomeScreen/HomeScreenStyles";
import { ProfileStyles } from "./ProfileScreenStyle";

const ProfileScreen = () => {
  const user = GetCurrentUser();

  console.log(user);

  return (
    <View>
      <ImageBackground
        style={ProfileStyles.image}
        source={require("../../assets/Backgrounds/Orange_Background.png")}
      >
        <View style={ProfileStyles.InnerContainer}>
          <Image
            style={ProfileStyles.Profile}
            source={require("../../assets/ProfileTemp.jpg")}
          />

          <View>
            <Text style={[Global.HeadingTwo, ProfileStyles.white]}>
              Reinhardt van Aarde
            </Text>
            <Text style={[Global.HeadingThree, ProfileStyles.white]}>
              {user.email}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={ProfileStyles.BottomContainer}>
        <Text style={Global.HeadingTwo}>Previous Submissions:</Text>
        <View style={ProfileStyles.Competitions}>
          <ScrollView>
            <View style={ProfileStyles.innerContainerScroll}>
              <ProfileSubmissions />
              <ProfileSubmissions />
              <ProfileSubmissions />
              <ProfileSubmissions />
              <ProfileSubmissions />
            </View>
          </ScrollView>
        </View>

        <Button OnPress={LogOut} ButtonType={"Secondary"} ButText={"Log Out"} />
      </View>
    </View>
  );
};

export default ProfileScreen;

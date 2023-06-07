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

const ProfileScreen = ({ navigation }) => {
  const user = GetCurrentUser();

  console.log(user);

  return (
    <View>
      <ScrollView>
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
                {user.displayName}
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
          <Button
            OnPress={LogOut}
            ButtonType={"Secondary"}
            ButText={"Log Out"}
          />
          {/* //TODO make more interesting */}
          <Button
            OnPress={() => navigation.navigate("NewComp")}
            ButtonType={"Primary"}
            ButText={"Make Competition!"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

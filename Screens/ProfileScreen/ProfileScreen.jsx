import * as ImagePicker from "expo-image-picker";
import { getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import ProfileSubmissions from "../../Components/Common/ProfileSubmissions/ProfileSubmissions";
import Button from "../../Components/Partials/Button/Button";
import { uploadToStorage } from "../../Services/ImageService";
import { getCurrentUserData } from "../../Services/UserService";
import { GetCurrentUser, LogOut } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { HomeStyles } from "../HomeScreen/HomeScreenStyles";
import { ProfileStyles } from "./ProfileScreenStyle";

const ProfileScreen = ({ navigation }) => {
  const user = GetCurrentUser();
  console.log(user);
  const storage = getStorage();
  // let allUserData = getCurrentUserData(user.email);

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    let allUserData = getCurrentUserData(user.email);
    setUserData(allUserData);
    console.log("DATAA");
    console.log(userData);
  }, [allUserData]);

  const gsReference = ref(storage, userData.ProfileImage);
  // const httpsReference = ref(storage, user.photoURL);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(JSON.stringify(result, null, 2));
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    console.log(image);
  };

  const uploadImage = async (image, path, name) => {
    const result = await uploadToStorage(image, `${path}/${name}`);
    setImageUrl(result);
    console.log(imageUrl);
    return result;
  };

  return (
    <View>
      <ScrollView>
        <ImageBackground
          style={ProfileStyles.image}
          source={require("../../assets/Backgrounds/Orange_Background.png")}
        >
          <View style={ProfileStyles.InnerContainer}>
            <TouchableHighlight
              style={{ borderRadius: 15 }}
              onPress={pickImage}
            >
              <Image style={ProfileStyles.Profile} source={gsReference} />
            </TouchableHighlight>

            <TouchableHighlight
              style={[ProfileStyles.SaveChanges, Global.HeadingThree]}
            >
              <Text>Save Changes</Text>
            </TouchableHighlight>

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

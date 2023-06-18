import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useCallback, useEffect, useState } from "react";
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
import Loader from "../../Components/Partials/Loader/Loader";
import {
  getAllCompetitions,
  getSubmissionsById,
  getSubmissionsByUserId,
} from "../../Services/CompetitionService";
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

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [Competitions, setCompetitions] = useState([]);
  const [Loading, setLoading] = useState(false);

  const imageSource = {
    uri: imageUrl,
  };

  getDownloadURL(
    ref(storage, "gs://reciperumble-f3601.appspot.com/profile.jpg")
  )
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      // Or inserted into an <img> element
      console.log("URL");
      console.log(url);
      setImageUrl(url);
    })
    .catch((error) => {
      console.log(error);
      // Handle any errors
    });

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
    const allCompetitions = await getSubmissionsByUserId(GetCurrentUser().uid);
    setCompetitions(allCompetitions);
    setLoading(false);
  };

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
              <Image style={ProfileStyles.Profile} source={imageSource} />
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
                <Loader loading={Loading} position={""} />
                {Competitions.map((items) => (
                  <ProfileSubmissions
                    Image={items.Image}
                    Likes={items.Likes}
                    VoteData={items}
                  />
                ))}
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

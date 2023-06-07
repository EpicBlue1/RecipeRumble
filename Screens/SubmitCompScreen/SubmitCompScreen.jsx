import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DatePicker from "react-native-neat-date-picker";
import BackButton from "../../Components/Partials/BackButton/BackButton";
import Button from "../../Components/Partials/Button/Button";
import Input from "../../Components/Partials/Input/Input";
import { createSubmission } from "../../Services/CompetitionService";
import { GetCurrentUser } from "../../Services/firebaseAuth";
import { Global } from "../../Utils/GlobalStyles";
import { Colors } from "../../Utils/ReUsables";
import { SubmitScreenStyle } from "./SubmitCompScreenStyle";

//TODO are you sure you want to go back when competition info is filled in
//TODO modal to show competition requirements
//TODO check if inputs are empty

const SubmitCompScreen = ({ route, navigation }) => {
  const data = route.params.project;
  console.log(data.CompId);
  const [Image, setImage] = useState("");
  const [SubName, setSubName] = useState("");
  const [Description, setDescription] = useState("");
  const [Ingredient, setIngredient] = useState("");
  const [Step, setStep] = useState("");

  const [DescError, setDescError] = useState("");
  const [IngredientError, setIngredientError] = useState("");

  const [Ingredients, setIngredients] = useState([]);
  const [Steps, setSteps] = useState([]);

  const addRecipe = () => {
    //TODO check if item is already added
    //TODO max items?
    setIngredients((items) => [...items, Ingredient]);
    this.textInput.clear();
  };

  const addStep = () => {
    setSteps((items) => [...items, Step]);
    this.textInput.clear();
  };

  const addSubmission = async () => {
    let Submission = {
      Image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      SubName: SubName,
      Description: Description,
      Ingredients: Ingredients,
      Userid: GetCurrentUser().uid,
      CompetitionId: data.CompId,
      Likes: 0,
    };

    const success = createSubmission(Submission);
    if (success) {
      console.log("Added Competition");
      navigation.goBack();
    } else {
      console.log("Not added Submission");
    }
  };

  return (
    <View style={SubmitScreenStyle.Container}>
      <ScrollView>
        <ImageBackground
          style={SubmitScreenStyle.Image}
          source={require("../../assets/Backgrounds/CompSubmitBack.jpg")}
        >
          <BackButton />
          <View style={SubmitScreenStyle.InfoContainer}>
            <Text style={Global.HeadingTwo}>Submit a Recipe</Text>
          </View>
        </ImageBackground>
        <View style={SubmitScreenStyle.InputContainer}>
          <ImageBackground
            style={SubmitScreenStyle.addImage}
            source={require("../../assets/Backgrounds/Blank.jpg")}
          >
            <ImageBackground
              style={SubmitScreenStyle.addImageInner}
              source={require("../../assets/icons/Gallery.png")}
            ></ImageBackground>
          </ImageBackground>
          <Input
            Place={"Submission Name"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setSubName}
            Error={""}
          />
          <View
            style={{
              marginTop: 10,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Text style={Global.HeadingThree}>Ingredients:</Text>
          <View style={SubmitScreenStyle.IngredientsContainer}>
            {Ingredients.length === 0 ? (
              <Text>Add ingredients below!</Text>
            ) : (
              Ingredients.map((Item, index) => (
                <View key={index} style={SubmitScreenStyle.IngredientView}>
                  <Text>{Item}</Text>
                </View>
              ))
            )}
          </View>
          <Input
            Place={"Ingredient name"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setIngredient}
            Error={""}
            Ref={(input) => {
              this.textInput = input;
            }}
          />
          <Button
            OnPress={addRecipe}
            ButtonType={"Secondary"}
            ButText={"Add Ingredient"}
          />
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Text style={Global.HeadingThree}>Steps:</Text>
          <View style={SubmitScreenStyle.StepsContainer}>
            {Ingredients.length === 0 ? (
              <Text>Add steps below!</Text>
            ) : (
              Steps.map((Item, index) => (
                <View key={index} style={SubmitScreenStyle.StepsView}>
                  <Text>
                    {index + 1}. {Item}
                  </Text>
                </View>
              ))
            )}
          </View>
          <Input
            Place={"Step desc"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setStep}
            Error={""}
            Ref={(input) => {
              this.textInput = input;
            }}
          />
          <Button
            OnPress={addStep}
            ButtonType={"Secondary"}
            ButText={"Add Step"}
          />
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              width: "90%",
              borderBottomColor: Colors.Gray,
              borderBottomWidth: 0.5,
            }}
          />
          <Input
            Place={"Submission Description"}
            Type={"default"}
            Icon={"Edit"}
            SecureEntry={false}
            setProp={setDescription}
            Error={""}
          />

          <Button
            OnPress={addSubmission}
            ButtonType={"Primary"}
            ButText={"Submit"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SubmitCompScreen;

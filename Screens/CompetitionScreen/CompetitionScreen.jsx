import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Global } from '../../Utils/GlobalStyles'
import { CompStyles } from './CompetitionScreenStyles'

const CompetitionScreen = () => {
  return (
    <View style={CompStyles.Container}>
        <ImageBackground style={CompStyles.Image} source={require("../../assets/icon.png")}>
            <Text style={Global.HeadingOne}>Title</Text>
            <View style={CompStyles.innerContainer}>
                <Image style={CompStyles.Icon} source={require("../../assets/icons/Two-user.png")}/>
                <Text style={Global.Paragraph}>124</Text>
            </View>
        </ImageBackground>
        <View style={CompStyles.BottomContainer}>
            <View style={CompStyles.Description}>
                <ScrollView >
                    <Text style={ [Global.Paragraph]}>Get ready to show off your culinary skills in the ultimate pasta cooking competition! This event is open to all pasta lovers who want to showcase their creativity in the kitchen. Whether you prefer classic Italian flavors or want to experiment with unique ingredients, this competition is the perfect opportunity to let your inner chef shine.</Text>
                </ScrollView>
            </View>

            <Text style={Global.HeadingTwo}>Submissions:</Text>
            <Text style={Global.HeadingThree}>1d 5h 32m left</Text>

            <TouchableOpacity style={CompStyles.ButtonVoteSub}>
                <ImageBackground style={CompStyles.IconButt} source={require("../../assets/icons/HeartDark.png")}/>
                <Text style={ [Global.HeadingTwo, CompStyles.ButtonText]}>Vote</Text>
                <View style={CompStyles.IconButtBack}>
                    <ImageBackground style={CompStyles.IconButt} source={require("../../assets/icons/Play.png")}/>
                </View>            
            </TouchableOpacity>
            
            <TouchableOpacity style={CompStyles.ButtonVoteSub}>
                <ImageBackground style={CompStyles.IconButt} source={require("../../assets/icons/HeartDark.png")}/>
                <Text style={ [Global.HeadingTwo, CompStyles.ButtonText]}>Submit</Text>
                <View style={CompStyles.IconButtBack}>
                    <ImageBackground style={CompStyles.IconButt} source={require("../../assets/icons/Play.png")}/>
                </View>            
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CompetitionScreen


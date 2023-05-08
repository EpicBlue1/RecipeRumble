import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CompetitionBox from '../../Components/Common/CompetitionBox/CompetitionBox';
import Voting from '../../Components/Common/VoteIng/Voting';
import { Global } from '../../Utils/GlobalStyles';
import { VotingScreenStyles } from './VotingScreenStyles';

const VotingScreen = () => {
  return (
    <View style={VotingScreenStyles.Container}>
        <View style={VotingScreenStyles.TopContainer}>
            <Text style={Global.HeadingOne}>Competition Title</Text>
            <Text style={Global.HeadingThree}>Voting</Text>
        </View>
        <View style={VotingScreenStyles.BottomContainer}>
            <ScrollView>
                <Voting/>
                <Voting/>
                <Voting/>
            </ScrollView>
        </View>
    </View>
  )
}

export default VotingScreen


import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Global } from '../../../Utils/GlobalStyles'
import { CompetitionBoxStyles } from './CompetitionBoxStyles'

const CompetitionBox = () => {
  return (
    <View style={CompetitionBoxStyles.Container}>
        <Image style={CompetitionBoxStyles.Image} source={require("../../../assets/icon.png")}/>
        <Text style={Global.CompetitionFont}>CompetitionBox</Text>
        <View style={CompetitionBoxStyles.innerContainer}>
            <Image style={CompetitionBoxStyles.Icon} source={require("../../../assets/icons/Two-user.png")}/>
            <Text style={Global.Paragraph}>124</Text>
            <View style={CompetitionBoxStyles.HorSpacer}></View>
            <Image style={CompetitionBoxStyles.Icon} source={require("../../../assets/icons/Play.png")}/>
        </View>
    </View>
  )
}

export default CompetitionBox


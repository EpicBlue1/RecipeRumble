import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Global } from '../../../Utils/GlobalStyles'
import { Colors } from '../../../Utils/ReUsables'

const ResultsTopBox = () => {
  return (
    <View style={styles.Container}>
        <View>
            <ImageBackground style={styles.image} source={require("../../../assets/Test.png")}>
                <View style={styles.score}>
                    <Text>120</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={styles.Texts}>
            <Text style={Global.HeadingThree}>Dish Name</Text>
            <Text style={Global.Paragraph}>Participant Name</Text>
        </View>
    </View>
  )
}

export default ResultsTopBox

const styles = StyleSheet.create({
    Container: {
        width: null,
        height: 80,
        backgroundColor: Colors.Dirty_White_Dark,
        shadowColor: "#464646",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    score: {
        width: null,
        height: 18,
        backgroundColor: Colors.Green,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Texts: {
        width: 240,
        height: 50,
        justifyContent: 'space-around'
    }
})
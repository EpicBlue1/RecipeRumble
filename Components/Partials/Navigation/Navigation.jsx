import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../Utils/ReUsables'

const Navigation = () => {
  return (
    <View style={styles.Container}>
      <Text>Navigation</Text>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        width: 250,
        height: 62,
        backgroundColor: 'red',
        alignSelf: 'center',
        bottom: 35,
        borderRadius: 10,
        backgroundColor: Colors.Dirty_White,
        borderRadius: 10,
        shadowColor: "#464646",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'space-around', alignItems: 'center'
    }
})
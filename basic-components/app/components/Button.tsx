import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({

    button: {
        backgroundColor: '#7aabffff'
    },
    txtWhite: {
        color:'white'
    }
})


const Button = () => {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.txtWhite}>Button</Text>
        </TouchableOpacity>
      
    </View>
  )
}


export default Button
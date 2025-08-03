import React from "react";
import { Text, View,StyleSheet   } from "react-native";
import Button from "./components/Button";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })



  return (
   <View style={styles.container}>
    <Button /> 
   </View>
  );
}

import React, { Component,Props,useEffect, useState, createRef, useRef} from "react";
import {
  Platform,
  KeyboardAvoidingView,
  SectionList,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,Button
} from "react-native";

import JournalItems from "./JournalItems";
import Page2,{Def} from './TextInput';



export function changeText(){
  
  console.log("Clicked"); 

}


export default function App() {
  const inputEL = React.useRef(null);
  return (
    <View style={styles.container}>
      <Text>{changeText}</Text>
      <Button title="Button1" onPress={Def}></Button>
      <Page2 changeTXT={this.changeText}></Page2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold"
  },
  list: {
    marginTop: 24,
    borderColor: "red"
  },
  listHeader: {
    backgroundColor: "darkgray"
  }
});
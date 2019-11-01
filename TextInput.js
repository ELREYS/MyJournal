import React,{Props} from "react";
import { StyleSheet, View,Text,Button } from "react-native";

import Page1,{changeText} from  './App'

export function Def(txt){
  console.log("Ciao");
}

export default function App() {
  var listname = "Ciao"
  return (
    <View>
      <Text>Page2</Text>
      <Button title="Click" onPress={changeText}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
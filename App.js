import React, { useState,createRef,useRef } from "react";
import {
  KeyboardAvoidingView,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { clearLine } from "readline";

const { width, height } = Dimensions.get("window");



export default function App() {
  const [newText, setText] = useState("Keine Einträge im Tagebuch");
  const [items, setItems] = useState([]);
  
  
  let inputEL = useRef(null);
  
  

  function _addItem(text) {

    setItems([...items, { text, date: Date.now().toString() }]);
    console.log(items.length);
    const obj = Object.values(inputEL.current);
    console.log(obj[5]);
    
    
    
       
  }

  if (items.length > 0) {
    var content = (
      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => <Text>{`${item.text} : ${item.date}`}</Text>}
        keyExtractor={item => item.date}
      />
    );
  } else {
    var content = <Text style={styles.title}>{newText}</Text>;
  }

  return (
    <View style={styles.container}>
      {content}

      <KeyboardAvoidingView behavior="padding">
        <TextInput
          ref={inputEL}
          autoCorrect={false}
          returnKeyType="done"
          style={styles.input}
          placeholder="Tagebucheintrag erstellen"
          alignItems="center"
          onSubmitEditing={event => _addItem(event.nativeEvent.text)}
          onChangeText={text => setText(text)}
        />
      </KeyboardAvoidingView>
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
  input: {
    height: 40,
    width: width,
    alignSelf: "center"
  },
  list: {
    marginTop: 24,
    borderColor: "red"
  }
});

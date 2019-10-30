import React, { useEffect, useState, createRef, useRef } from "react";
import {
  KeyboardAvoidingView,
  SectionList,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const journalItems = [
  {
    data: [
      {
        text: "Umgang mit SectionList in React Native",
        date: 1
      }
    ],

    title: "29.7.2017"
  },
  {
    data: [{ text: "Einkaufen", date: 2 }, { text: "Games", date: 3 }],

    title: "28.7.2017"
  }
];

const { width, height } = Dimensions.get("window");

export default function App() {
  const inputEL = React.useRef(null);
  const [newText, setText] = useState("Keine Einträge im Tagebuch");
  const [items, setItems] = useState(journalItems);

  var [head, ...tail] = journalItems;
  //console.log(head);
  //console.log(tail);
  

  function _addItem(text) {
    //Datum für heute aufbauen

    const now = new Date();
    const day = now.getDay();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    //console.log(jitem); //leere Array
    //setJ(journalItems);
    //console.log(jitem);

    const today = `${day}.${month}.${year}`;

    if (head === undefined || head.title !== today) {
      // ggf. neuen Abschnitt für heutiges Datum erstellen
      head = { data: [], title: today };
      tail = items;

      //console.log("head.title: "+head.title);
      //console.log("items: "+ items);
      //console.log("tail:"+tail);
    }

    // neuen Eintrag (newItem) an vorderster Stelle einfügen

    const newItem = { text, date: now.getTime() };
    head.data = [newItem, ...head.data];
    setItems([head, ...tail]);
    console.log("NewItem:" + head.data + head.tail);
    console.log(items);
    console.log(items.length);

    //console.log(jitem.length);
    //console.log(jitem);

    //console.log(journalItems.length);
    //console.log(items);
    inputEL.current.clear();
  }

  if (journalItems.length > 0) {
    var content = (
      <SectionList
        style={styles.list}
        sections={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.listHeader}>{section.title}</Text>
        )}
        keyExtractor={item => item.date}
      />
    );
  } else {
    content = <Text style={styles.title}>{newText}</Text>;
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
  },
  listHeader: {
    backgroundColor: "darkgray"
  }
});

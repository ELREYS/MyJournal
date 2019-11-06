import React, { useState } from "react";
import {
  Platform,
  SectionList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";

import CustomTextInput from "./TextInput";

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
  },
  {
    data: [{ text: "Einkaufen", date: 4 }, { text: "Games", date: 5 }],

    title: "27.7.2017"
  },
  {
    data: [{ text: "Einkaufen", date: 6 }, { text: "Games", date: 7 }],

    title: "26.7.2017"
  }
];

const JournalItems = props => {
  

  const [customTextInput, setCustomTextInput] = useState();
  
  callBackFunction = childData => {
    console.log("CallBack aufegreufen")
    //console.log(childData);
    setCustomTextInput(childData);
    console.log(customTextInput)
  };

  const { width, height } = Dimensions.get("window");
  const details = React.useRef(null);
  const [newText, setText] = useState("Keine Einträge im Tagebuch");
  const [items, setItems] = useState(journalItems);
  const TouchableItem =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

  const RunningSystem = Platform.select({
    ios: {
      Name: "ios"
    },
    android: {
      Name: "android"
    }
  });

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
    //console.log("NewItem:" + head.data + head.tail);
    //console.log(items);
    //console.log(items.length);
    //console.log(customTextInput)
    //console.log(jitem.length);
    //console.log(jitem);

    //console.log(journalItems.length);
    //console.log(items);
    customTextInput.current.clear();
    
  }

  if (journalItems.length > 0) {
    var content = (
      <SectionList
        style={styles.list}
        sections={items}
        renderItem={({ item }) => (
          <TouchableItem
            underlayColor="red"
            onPress={() => console.log(RunningSystem.Name)}
          >
            <Text>{item.text}</Text>
          </TouchableItem>
        )}
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
      <CustomTextInput
        dataSource={items}
        functionAddItems={_addItem}
        parentCallBack = {callBackFunction}
      ></CustomTextInput>
    </View>
  );
};

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

export default JournalItems;

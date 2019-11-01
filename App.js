import React, { useEffect, useState, createRef, useRef } from "react";
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
  View
} from "react-native";

import JournalItems from "./JournalItems";

export default function App() {
  const inputEL = React.useRef(null);
  return (
    <View style={styles.container}>
      <JournalItems itema={JournalItems}></JournalItems>
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

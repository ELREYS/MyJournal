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

export default function JournalItems() {
  const inputEL = React.useRef(null);
  return (
    <View style={styles.container}>
      

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
  list: {
    marginTop: 24,
    borderColor: "red"
  },
  listHeader: {
    backgroundColor: "darkgray"
  }
});

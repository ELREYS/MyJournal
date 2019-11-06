import React, { useRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
  Button,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");

const CustomTextInput = props => {
  const inputEL = React.useRef(null);

  const sendRef = ref => {
    props.parentCallBack(ref);
  };

  sendRef(inputEL);

  return (
    <KeyboardAvoidingView behavior="padding">
      <TextInput
        ref={inputEL}
        autoCorrect={false}
        returnKeyType="done"
        style={styles.input}
        placeholder="Tagebucheintrag erstellen"
        alignItems="center"
        onSubmitEditing={event =>
          props.functionAddItems(event.nativeEvent.text)
        }
        onChangeText={text => console.log("")}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: width,
    alignSelf: "center"
  }
});

export default CustomTextInput;

import React,{useState} from 'react';
import { Dimensions,StyleSheet, Text,TextInput, View } from 'react-native';

const {width, height} = Dimensions.get('window');


export default function App() {
  const [newText,setText] = useState('Keine Einträge im Tagebuch'); 
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {newText}</Text>
      <TextInput autoCorrect={false} returnKeyType='done' style={styles.input}
      placeholder="Tagebucheintrag erstellen" alignItems='center'
      onSubmitEditing={event => setText(event.nativeEvent.text)}
      newText={newText}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    
    fontWeight:'bold',
  },
  input:{
    height:40,
    width:width,
    alignSelf:'center',    
  }
});

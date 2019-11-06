import React  from "react";
import {
  Dimensions,
  StyleSheet,
  RefreshControl,
  View
} from "react-native";
import JournalItems from './JournalItems';


const { width, height } = Dimensions.get("window");

export default function App() {
  return (

    <View style={styles.container}>
      <JournalItems></JournalItems>
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

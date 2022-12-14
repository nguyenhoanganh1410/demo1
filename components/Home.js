import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Appstyles from "./HomeStyle.scss";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={Appstyles.text}>
        Open up App.js to start working on app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

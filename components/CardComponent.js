import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Stack, Button } from "@react-native-material/core";
import image from "../images/started_hat.png";
const CardComponent = ({ navigation, item }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Image style={styles.tinyLogo} source={image} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 6 }}>
        {item.name}
      </Text>
      <Text style={{ color: "#434242" }}>${item.price}</Text>
    </View>
  );
};

export default CardComponent;
const styles = StyleSheet.create({
  block: {
    backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#F1D3B3",
  },
  container: {
    // backgroundColor: "red",
    width: "45%",
    marginRight: 34,
    paddingVertical: 12,
    paddingVertical: 12,

    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 180,
    height: 250,
  },
});

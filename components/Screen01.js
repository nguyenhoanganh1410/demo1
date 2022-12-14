import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, Animated } from "react-native";
import { Stack, Button } from "@react-native-material/core";
import image from "../images/started_hat.png";
import { useEffect, useRef } from "react";
const Screen01 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  // const handlePadeOut = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //   }).start();
  // };
  // useEffect(() => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //   }).start();
  // }, []);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center" }}>
          WELCOME TO FURISAS
        </Text>

        <Text style={{ textAlign: "center", marginVertical: 50, fontSize: 16 }}>
          A premium online store for women and their stylish choice women and
          their stylish choice
        </Text>
        <Button
          title="Get Started"
          onPress={() => handlePress()}
          style={{
            backgroundColor: "black",
            width: "40%",
            paddingVertical: 8,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        }}
      >
        <Image style={styles.tinyLogo} source={image} />
      </View>
    </View>
  );
};

export default Screen01;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  tinyLogo: {
    marginBottom: 54,
  },
});

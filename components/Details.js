import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import coffe from "../images/started_hat.png";
import Appstyles from "./DatailsStyle.scss";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext, useEffect, useState } from "react";
import { Stack, Button } from "@react-native-material/core";
// import Contex from "../store/Context";
// import { SetCart } from "../store/Actions";

export default function Details({ route, navigation }) {
  //   const { state, depatch } = useContext(Contex);
  //   const { cart } = state;
  const { item } = route.params;

  // console.log(item.image);
  const handleAddToCart = () => {
    const dataObject = {
      name: item.name,
      image: item.image,
      price: item.price,
    };
    fetch("https://63984711fe03352a94caecd0.mockapi.io/api/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    })
      .then((response) => {
        console.log("thanh cong");
      })
      .then((data) =>
        // this is the data we get after putting our data,
        console.log(data)
      );
  };

  return (
    <View style={styles.container}>
      <View style={Appstyles.top}>
        {/* <Image style={styles.tinyLogo} source={{ uri: item.image }} /> */}
        <Image style={styles.tinyLogo} source={coffe} />
      </View>
      <View style={Appstyles.bottom}>
        <Text
          style={{
            fontSize: 32,
            color: "#444444",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {item?.name}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>10% OFF | {item.price}$</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginLeft: 8,
                textDecorationLine: "line-through",
                fontSize: 18,
              }}
            >
              499$
            </Text>
          </View>
        </View>

        <View style={Appstyles.about}>
          <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: 12 }}>
            Desciptionout
          </Text>
          <Text style={Appstyles.text}>{item.desc}</Text>
        </View>
        <Button
          title="Buy Now"
          style={Appstyles.button}
          onPress={() => handleAddToCart()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: "80%",
    height: "100%",
    resizeMode: "stretch",
  },
  input: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 12,
  },
});

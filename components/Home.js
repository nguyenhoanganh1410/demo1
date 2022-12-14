import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Appstyles from "./HomeStyle.scss";
import { Stack, Button } from "@react-native-material/core";
import image from "../images/started_hat.png";
import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://63984711fe03352a94caecd0.mockapi.io/api/products")
      .then((res) => res.json())
      .then((json) => setList(json));
  }, []);

  const renderItem = ({ item }) => <CardComponent item={item} />;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>Welcome Back!</Text>
      <Text style={{ color: "#434242" }}>Hoang Anh!</Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#FFDCA9",
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 12,
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Welcome Back!</Text>
          <Text
            style={{
              marginVertical: 12,
              color: "#434242",
            }}
          >
            Get a 50% discount on your first purchase
          </Text>
          <Button
            title="Buy Now"
            style={{
              backgroundColor: "black",
              width: "60%",
              fontSize: 12,
              paddingVertical: 4,
              borderRadius: 20,
            }}
          />
        </View>
        <Image style={styles.tinyLogo} source={image} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            backgroundColor: "red",
            color: "white",

            paddingHorizontal: 6,
            paddingVertical: 6,
            borderRadius: 10,
          }}
        >
          Trending
        </Text>
        <Text style={{ marginHorizontal: 12 }}>Populer</Text>
        <Text> We recommended</Text>
      </View>
      <FlatList
        // horizontal
        horizontal={false}
        //numColumns={2}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 34,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

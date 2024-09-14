import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");
export default function index() {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.28,
        marginTop: 12,
        backgroundColor: "red",
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: "https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg",
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text>
          <Text>{"\u20BA"} </Text>49.95
        </Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}

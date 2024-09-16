import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");
export default function index() {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: height * 0.12,
        backgroundColor: "white",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      <View
        style={{
          height: height * 0.06,
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: "8",

          backgroundColor: "#5d39c1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500", fontSize: 14 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}

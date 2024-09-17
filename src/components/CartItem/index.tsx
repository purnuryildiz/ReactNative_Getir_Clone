import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Product } from "../../models";

type CartItemProps = {
  product: Product;
};

const { width, height } = Dimensions.get("window");

export default function index({ product }: CartItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          backgroundColor: "white",
          marginHorizontal: width * 0.04,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: product.image }}
            style={{ height: height * 0.09, width: height * 0.09 }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: "600", maxWidth: width * 0.46 }}>
              {product.name}
            </Text>
            <Text style={{ fontSize: 12, marginTop: 3, color: "#848897" }}>
              {product.miktar}
            </Text>
            <Text style={{ color: "#5d3ebd", fontWeight: "bold", marginTop: 6 }}>
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            shadowOpacity: 0.4,
            shadowColor: "grey",
            flexDirection: "row",
            width: width * 0.21,
            height: height * 0.037,
            borderRadius: 10,
            borderColor: "lightgrey",
            borderWidth: 0.5,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text> - </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5d3ebd",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}> 1 </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text> + </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

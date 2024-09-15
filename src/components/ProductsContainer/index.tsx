import { View, Text } from "react-native";
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";
import React from "react";

export default function index() {
  return (
    //Main View
    <View>
      {/* 2 Products */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 10,
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>

      <Text style={{ color: "gray", fontWeight: "bold", padding: 14 }}>Çubuk</Text>

      {/* The products below */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          flex: 1,
          backgroundColor: "white",
          paddingVertical: 10,
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

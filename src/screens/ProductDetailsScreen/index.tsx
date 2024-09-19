import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";

import { Route } from "@react-navigation/native";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import ImageCarousel from "../../components/ImageCarousel";
import CardButton from "../../components/CardButton";

export default function index(props) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={"#5d3e8d"} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product?.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
        <Text
          style={{
            paddingHorizontal: 14,
            paddingVertical: 16,
            color: "#808b99",
            fontWeight: "600",
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
}

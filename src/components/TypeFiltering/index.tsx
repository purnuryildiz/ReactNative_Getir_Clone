import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          height: height * 0.044,

          borderRadius: 6,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff3", borderWidth: 2 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849f7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}{" "}
      </Text>
    </TouchableOpacity>
  );
};
export default function index() {
  const [category, setCategorie] = useState<String>("Birlikte İyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        backgroundColor: "white",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        shadowColor: "lightColor",
        shadowOpacity: 0.3,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
        <TypeBox setCat={setCategorie} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

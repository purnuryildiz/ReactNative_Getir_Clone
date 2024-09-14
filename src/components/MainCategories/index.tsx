import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CategoryItem from "../CategoryItem";
import categoriesGetir from "../../../assets/categoriesGetir";

import { Category } from "../../models";
export default function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <View style={styles.listContainer}>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

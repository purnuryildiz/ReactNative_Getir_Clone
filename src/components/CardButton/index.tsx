import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";

const { height, width } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

function index({ item, addItemToCart }: cartButtonType) {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);

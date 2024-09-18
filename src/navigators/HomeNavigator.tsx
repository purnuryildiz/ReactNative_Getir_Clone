import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";

import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import styles from "../components/HeaderMain/styles";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

export default function HomeNavigator() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } }); //
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/cart.png")}
                style={{ width: 23, height: 23, marginLeft: 6 }}
              />
              <View style={{ height: 33, width: 4, backgroundColor: "white" }} />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#f3effe",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 12 }}>
                  <Text>{"\u20BA"} </Text>
                  22,00
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 12 }}>
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 8 }}>
              <Ionicons name="trash" size={26} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

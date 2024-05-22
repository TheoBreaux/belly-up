import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Entypo name="home" size={40} color={Colors.brand} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Card")}
      >
        <FontAwesome name="credit-card-alt" size={40} color={Colors.brand} />
        <Text style={styles.label}>Card</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Ionicons name="search-outline" size={24} color="white" />
        <Text style={[styles.label, { color: "white" }]}></Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("QRCode")}
      >
        <Ionicons name="qr-code" size={40} color={Colors.brand} />
        <Text style={styles.label}>QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cart")}
      >
        <MaterialIcons name="shopping-cart" size={40} color={Colors.brand} />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    // borderTopColor: "#ccc",
    height: 74,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.brand,
    height: Platform.OS === "ios" ? 70 : 60,
    width: Platform.OS === "ios" ? 70 : 60,
    top: Platform.OS === "ios" ? -20 : -30,
    borderRadius: Platform.OS === "ios" ? 35 : 30,
    borderWidth: 2,
    borderColor: "white",
  },
  label: {
    fontSize: 12,
    color: "gray",
    fontFamily: "Roboto",
  },
});

export default BottomNavBar;

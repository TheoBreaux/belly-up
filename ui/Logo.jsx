import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Logo = () => {
  return (
    <View>
      <Text style={styles.logo}>Belly Up</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    fontFamily: "PaytoneOne",
    color: Colors.brand,
  },
});

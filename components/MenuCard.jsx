import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const MenuCard = ({ source, menu }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{menu}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceColor,
    width: "45%",
    height: 120,
  },
  image: {
    width: "100%",
    height: 100,
    resizemode: "cover",
  },
  text: {
    fontFamily: "RobotoBold",
    fontSize: 14,
    textAlign: "center",
  },
});

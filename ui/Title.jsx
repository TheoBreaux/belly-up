import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children, alignment }) => {
  const textAlign = alignment ? alignment : "left";
  return <Text style={[styles.title, { textAlign }]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "RobotoBold",
    color: "black",
    marginTop: -10,
  },
});

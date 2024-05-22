import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ background }) => {
  const backgroundColor = background ? background : "white";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Ionicons name="search-outline" size={25} color="black" />
      <TextInput placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    width: "90%",
    height: 40,
    padding: 5,
    elevation: 5,
  },
});

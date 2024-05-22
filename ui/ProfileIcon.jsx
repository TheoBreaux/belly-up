import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import ProfileImage from "../assets/images/theo.jpg";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = ({ text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProfileScreen")}
    >
      <View style={styles.iconContainer}>
        <Image source={ProfileImage} style={styles.image} />
      </View>
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default ProfileIcon;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 999,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: Colors.brand,
  },
});

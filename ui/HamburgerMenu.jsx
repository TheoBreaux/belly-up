import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { Entypo, FontAwesome, Octicons, Fontisto } from "@expo/vector-icons";
import Colors from "../constants/colors";
import ProfileIcon from "./ProfileIcon";

const screenHeight = Dimensions.get("window").height;

const HamburgerMenu = ({ setShowMenu, toggleMenu }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressable} onPress={toggleMenu}>
          <Text style={styles.text}>Close</Text>
          <Fontisto
            name="close-a"
            size={40}
            color={Colors.brand}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Home</Text>
          <Entypo
            name="home"
            size={40}
            color={Colors.brand}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Profile</Text>
          <ProfileIcon />
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Notifications</Text>
          <Octicons
            name="bell-fill"
            size={40}
            color={Colors.brand}
            style={styles.icon}
          />
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Settings</Text>
          <FontAwesome
            name="gear"
            size={40}
            color={Colors.brand}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "white",
    width: 250,
    height: screenHeight,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
    padding: 20,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: 25,
    fontFamily: "RobotoBold",
    color: "black",
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
});

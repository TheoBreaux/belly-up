import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Colors from "../constants/colors";
import HamburgerMenu from "./HamburgerMenu";

const screenHeight = Dimensions.get("window").height;

const HamburgerMenuIcon = () => {
  const [showMenu, setShowMenu] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current; // Initial position off-screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showMenu ? 0 : -300, // Slide in or out
      duration: 450, // Animation duration
      useNativeDriver: true,
    }).start();
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <>
      {showMenu && (
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 0],
              }),
            },
          ]}
        />
      )}
      {showMenu && (
        <Animated.View
          style={[
            styles.menuContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <HamburgerMenu toggleMenu={toggleMenu} />
        </Animated.View>
      )}
      <Pressable
        onPress={toggleMenu}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
        <Text style={styles.text}>Menu</Text>
      </Pressable>
    </>
  );
};

export default HamburgerMenuIcon;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    height: screenHeight,
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    width: "250", // Adjust width as necessary
    height: "100%", // Adjust height as necessary
    backgroundColor: "white", // Adjust background color as necessary
  },
  container: {
    width: 40,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 5,
    backgroundColor: Colors.brand,
  },
  text: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: Colors.brand,
  },
});

import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import ProfileIcon from "../ui/ProfileIcon";
import Logo from "../ui/Logo";
import HamburgerMenuIcon from "../ui/HamburgerMenuIcon";

const TopNav = () => {
  return (
    <View style={styles.container}>
      <ProfileIcon text="Profile" />
      <Logo />
      <HamburgerMenuIcon />
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});

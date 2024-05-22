import { StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import TopNav from "../navigation/TopNav";
import BottomNavBar from "../navigation/BottomNavBar";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#C9EFB1", "#FCFCFD", "#0A72ED"]}
        locations={[0.25, 0.8, 1]}
        style={styles.linearGradient}
      >
        <View style={styles.topNavContainer}>
          <TopNav />
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={{ padding: 10 }}>{children}</View>
        </ScrollView>

        <View style={styles.bottomNavContainer}>
          <BottomNavBar />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  topNavContainer: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 20,
    marginTop: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 60, // Ensure there's space for the BottomNavBar
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

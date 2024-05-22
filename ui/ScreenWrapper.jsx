import { StyleSheet, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import TopNav from "../components/TopNav";
import BottomNavBar from "../navigation/BottomNavBar";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#C9EFB1", "#FCFCFD", "#0A72ED"]}
        locations={[0.25, 0.8, 1]}
        style={styles.linearGradient}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            paddingVertical: 20,
            justifyContent: "flex-start",
          }}
        >
          <TopNav />
          <View style={{ padding: 10 }}>{children}</View>
        </View>
      </LinearGradient>
      <BottomNavBar />
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

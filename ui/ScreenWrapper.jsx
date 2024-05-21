import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import TopNav from "../components/TopNav";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#C9EFB1", "#FCFCFD", "#0A72ED"]}
        locations={[0, 0.75, 1]}
        style={styles.linearGradient}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            paddingVertical: 20,
            justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          <TopNav />
          <View style={{ padding: 10 }}>{children}</View>
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
});

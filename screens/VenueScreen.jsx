import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import ScreenWrapper from "../ui/ScreenWrapper";

const VenueScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: "white",
      }}
    >
      <LinearGradient
        colors={["#C9EFB1", "#FCFCFD", "#0A72ED"]}
        locations={[0, 0.75, 1]}
        style={styles.linearGradient}
      >
        <View
          style={{
            flex: 1,
            padding: 16,
          }}
        >
          {/* <TopNav /> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

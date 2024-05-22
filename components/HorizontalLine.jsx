import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "rgba(167, 165, 165, 1)", // Change color as needed
    borderBottomWidth: 1, // Adjust thickness as needed
    marginTop: 0, // Adjust spacing as needed
  },
});

export default HorizontalLine;

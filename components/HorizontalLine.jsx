import { View, StyleSheet } from "react-native";

const HorizontalLine = ({ color }) => {
  const lineColor = color ? color : "rgba(167, 165, 165, 1)"; // Default color
  return <View style={[styles.line, { borderBottomColor: lineColor }]} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    marginTop: 0,
  },
});

export default HorizontalLine;

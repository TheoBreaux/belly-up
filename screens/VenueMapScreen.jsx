import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TopNav from "../navigation/TopNav";
import Colors from "../constants/colors";
import VenueMap from "../assets/images/venue-map-rotated.jpg";
import Title from "../ui/Title";

const VenueMapScreen = () => {
  return (
    <>
      <View style={styles.topNavContainer}>
        <TopNav />
        <Title>Venue Map</Title>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image source={VenueMap} style={styles.image} />

        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>BACK</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default VenueMapScreen;

const styles = StyleSheet.create({
  topNavContainer: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  image: {
    height: 610,
    width: 385,
    resizeMode: "stretch",
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: Colors.brand,
    borderRadius: 20,
    width: "90%",
    height: 40,
    padding: 5,
    color: "white",
    elevation: 5,
    marginTop: 10,
  },
  text: {
    fontFamily: "Roboto",
    textAlign: "center",
    color: "white",
    letterSpacing: 1.25,
    fontSize: 14,
  },
});

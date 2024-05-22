import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { nearbyVenues } from "../data/data";
import HorizontalLine from "./HorizontalLine";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";

const NearbyVenues = () => {
  const navigation = useNavigation();
  return nearbyVenues.map((venue) => (
    <Pressable
      key={venue.id}
      style={styles.container}
      onPress={() => navigation.navigate("VenueScreen", { venue })}
    >
      <View style={styles.divider}>
        <HorizontalLine />
      </View>

      <View style={styles.row}>
        <Text style={styles.name}>{venue.name}</Text>
        <StarRatingDisplay
          rating={venue.rating}
          color="black"
          maxStars={5}
          starSize={15}
        />
      </View>

      <Text style={styles.text}>{venue.address}</Text>
      <Text style={styles.text}>
        {venue.city}, {venue.state} {venue.zip}
      </Text>
    </Pressable>
  ));
};

export default NearbyVenues;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  divider: {
    marginTop: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontFamily: "RobotoBold",
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
});

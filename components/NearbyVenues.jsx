import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { nearbyVenues } from "../data/data";
import HorizontalLine from "./HorizontalLine";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";

const NearbyVenues = () => {
  const navigation = useNavigation();

  const renderItem = ({ item: venue }) => {
    return (
      <Pressable
        key={venue.id}
        style={styles.container}
        onPress={() => navigation.navigate("VenueScreen", { venue })}
      >
        <HorizontalLine />
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
        <Text>
          {venue.city}, {venue.state} {venue.zip}
        </Text>
      </Pressable>
    );
  };

  return (
    <>
      <FlatList
        data={nearbyVenues}
        renderItem={renderItem}
        keyExtractor={(venue) => venue.id.toString()}
      />
      <View style={styles.divider} />
    </>
  );
};

export default NearbyVenues;

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
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
  divider: {
    width: "100%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
  },
});

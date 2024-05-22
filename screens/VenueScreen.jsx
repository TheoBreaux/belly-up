import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenWrapper from "../ui/ScreenWrapper";
import MenuCard from "../components/MenuCard";
import Title from "../ui/Title";
import HorizontalLine from "../components/HorizontalLine";
import SearchBar from "../ui/SearchBar";
import VenueMap from "../assets/images/venue-map.jpg";

const VenueScreen = ({ route }) => {
  const { venue } = route.params;

  return (
    <ScreenWrapper>
      <Title>{venue.name}</Title>
      <Text style={styles.text}>{venue.address}</Text>
      <Text style={styles.text}>
        {venue.city}, {venue.state} {venue.zip}
      </Text>
      <View style={styles.divider}>
        <HorizontalLine color="black" />
      </View>

      <View style={styles.menusContainer}>
        {venue.menu.map((menu, index) => (
          <MenuCard key={menu.id} source={menu.menuImg} menu={menu.title} />
        ))}
      </View>

      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>

      <View style={[styles.divider, { marginTop: 10 }]}>
        <HorizontalLine color="black" />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Title>Venue Map</Title>
      </View>

      <TouchableOpacity>
        <Image source={VenueMap} style={styles.image} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },
  divider: {
    marginVertical: 10,
  },
  menusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizemode: "cover",
  },
});

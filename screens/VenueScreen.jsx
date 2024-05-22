import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "../ui/ScreenWrapper";
import MenuCard from "../components/MenuCard";

const VenueScreen = ({ route }) => {
  const { venue } = route.params;

  return (
    <ScreenWrapper>
      <Text>{venue.name}</Text>
      <Text>{venue.address}</Text>
      <Text>
        {venue.city}, {venue.state} {venue.zip}
      </Text>
    </ScreenWrapper>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({});

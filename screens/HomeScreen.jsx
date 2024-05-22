import { StyleSheet, View } from "react-native";
import ScreenWrapper from "../ui/ScreenWrapper";
import Title from "../ui/Title";
import NearbyVenues from "../components/NearbyVenues";
import SearchBar from "../ui/SearchBar";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.title}>
        <Title>Nearby Venues</Title>
      </View>

      <NearbyVenues />
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  searchContainer: {
    flex: 1,
    marginTop: 190,
    alignItems: "center",
  },
});

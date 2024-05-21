import { StyleSheet } from "react-native";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import VenueScreen from "../screens/VenueScreen";
import MenuScreen from "../screens/MenuScreen";
import ConfirmationPaymentScreen from "../screens/ConfirmationPaymentScreen";
import QRCodeAndPickUpScreen from "../screens/QRCodeAndPickUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const AllScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: "Main",
      }}
    >
      {/* <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen
        component={VenueScreen}
        name="Venue"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={MenuScreen}
        name="Menu"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ConfirmationPaymentScreen}
        name="ConfirmationPayment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={QRCodeAndPickUpScreen}
        name="QRCodeAndPickUp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen name="Main" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default AllScreens;

const styles = StyleSheet.create({});

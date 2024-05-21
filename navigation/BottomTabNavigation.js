import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ConfirmationAndPaymentScreen from "../screens/ConfirmationPaymentScreen";
import QRCodeAndPickUpScreen from "../screens/QRCodeAndPickUpScreen";
import SearchScreen from "../screens/SearchScreen";
import CartPage from "../screens/CartPage";
import Colors from "../constants/colors";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
        },
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={{ fontSize: focused ? 13 : 10, color, marginBottom: 10 }}
          >
            {route.name}
          </Text>
        ),
        tabBarLabelStyle: {
          color: Colors.brand,
          fontFamily: "Roboto",
        },
        tabBarActiveTintColor: Colors.brand,
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "white",

        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;

          if (route.name === "Home") {
            IconComponent = Entypo;
            iconName = "home";
          } else if (route.name === "Card") {
            IconComponent = FontAwesome;
            iconName = "credit-card-alt";
          } else if (route.name === "QR Code") {
            IconComponent = Ionicons;
            iconName = "qr-code";
          } else if (route.name === "Cart") {
            IconComponent = MaterialIcons;
            iconName = "shopping-cart";
          }

          return <IconComponent name={iconName} size={40} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={40} color={Colors.brand} />
          ),
        }}
      />
      <Tab.Screen
        name="Card"
        component={ConfirmationAndPaymentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="credit-card-alt"
              size={40}
              color={Colors.brand}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Colors.brand,
                  height: Platform.OS === "ios" ? 70 : 60,
                  width: Platform.OS === "ios" ? 70 : 60,
                  top: Platform.OS === "ios" ? -20 : -30,
                  borderRadius: Platform.OS === "ios" ? 35 : 30,
                  borderWidth: 2,
                  borderColor: "white",
                }}
              >
                <Ionicons name="search-outline" size={24} color="white" />
              </View>
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="QR Code"
        component={QRCodeAndPickUpScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code" size={40} color={Colors.brand} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              size={40}
              color={Colors.brand}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});

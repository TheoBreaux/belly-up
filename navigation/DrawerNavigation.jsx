import { Settings, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo, Octicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import BottomTabNavigation from "./BottomTabNavigation";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 250,
        },
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: "RobotoBold",
          fontSize: 24,
          color: "black",
          marginRight: -15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Entypo name="home" size={40} color={Colors.brand} />
          ),
        }}
        component={BottomTabNavigation}
      />

      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
          headerShadowVisible: false,
          drawerIcon: () => (
            <FontAwesome name="user-circle" size={40} color={Colors.brand} />
          ),
        }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Octicons name="bell-fill" size={40} color={Colors.brand} />
          ),
        }}
        component={NotificationsScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerShadowVisible: false,
          drawerIcon: () => (
            <FontAwesome name="gear" size={40} color={Colors.brand} />
          ),
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

// screenOptions={({ navigation }) => ({
//   headerShown: false,
//   drawerStyle: {
//     backgroundColor: "white",
//     width: 250,
//   },
//   headerTintColor: Colors.brand,
//   drawerLabelStyle: {
//     color: "black",
//     fontSize: 24,
//     fontFamily: "RobotoBold",
//     marginRight: -20,
//   },
//   // drawerPosition: "left",
//   headerRight: () => (
//     <TouchableOpacity
//       onPress={() => navigation.toggleDrawer()}
//       style={{ marginRight: 15 }}
//     >
//       <Ionicons name="menu" size={30} color={Colors.brand} />
//     </TouchableOpacity>
//   ),
//   headerLeft: () => null,
// })}
// drawerContent={(props) => {
//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           height: 30,
//           width: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//           // marginTop: 40,
//         }}
//       >
//         <Image
//           source={ProfileImage}
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: 50,
//             borderWidth: 1,
//             borderColor: Colors.brand,
//           }}
//         />
//         <Text
//           style={{
//             fontSize: 24,
//             fontFamily: "RobotoBold",
//             color: "black",
//           }}
//         >
//           John Smith
//         </Text>

//         <Text
//           style={{
//             fontSize: 40,
//             color: Colors.brand,
//             fontFamily: "PaytoneOne",
//           }}
//         >
//           Belly Up
//         </Text>
//       </View>
//       <DrawerItemList {...props} />
//     </SafeAreaView>
//   );
// }}

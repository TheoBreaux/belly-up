import useFonts from "./useFonts";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ConfirmationPaymentScreen from "./screens/ConfirmationPaymentScreen";
import QRCodeAndPickUpScreen from "./screens/QRCodeAndPickUpScreen";
import CardScreen from "./screens/CardScreen";
import BottomNavBar from "./navigation/BottomNavBar";
import ProfileScreen from "./screens/ProfileScreen";
import VenueScreen from "./screens/VenueScreen";
import TopNav from "./navigation/TopNav";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = useFonts({
    PaytoneOne: require("./assets/fonts/PaytoneOne-Regular.ttf"),
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="QRCode" component={QRCodeAndPickUpScreen} />
        <Stack.Screen name="Cart" component={ConfirmationPaymentScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="VenueScreen" component={VenueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

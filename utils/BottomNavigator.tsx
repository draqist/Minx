import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabComponent from "../components/TabComponent";
import Actors from "../screens/Actors";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabComponent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Actors" component={Actors} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

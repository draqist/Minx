import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top, left, right, bottom } = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#0d1123",
          paddingTop: top,
          paddingHorizontal: 16,
          paddingRight: right,
          paddingBottom: bottom,
          height: "100%",
        }}
      >
        <Text style={{ color: "white" }}>Home</Text>
      </View>
    </>
  );
};

export default Home;

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top, left, right, bottom } = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#0d1123",
          paddingTop: top + 16,
          paddingHorizontal: 20,
          paddingBottom: bottom,
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#832b6d", fontSize: 28, fontFamily: "Logo" }}>
            MINX
          </Text>
          <Pressable>
            <View>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </View>
          </Pressable>
        </View>
        <Text style={{ color: "white" }}>Home</Text>
        <View
          style={{
            height: 220,
            backgroundColor: "#071047",
            marginTop: 28,
            borderRadius: 20,
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 18,
          }}
        >
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text
              style={{ color: "white", fontSize: 20, fontFamily: "heading", marginBottom: 10 }}
            >
              Violet Evergarden
            </Text>
            <Text style={{color: "white", fontSize: 14, fontFamily: "text"}}>
              After a great war, Violet Evergarden, a young ex-soldier woman works as writer
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "text",
                fontWeight: "400",
              }}
            >
              MODEL
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

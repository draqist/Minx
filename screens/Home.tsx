import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
  const { top, left, right, bottom } = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0d1123",
          paddingTop: top + 16,
          paddingBottom: 10,
          paddingHorizontal: 16,
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
      <ScrollView
        style={{
          backgroundColor: "#0d1123",
          paddingHorizontal: 16,
          // paddingBottom: bottom + 16,
          marginBottom: bottom,
        }}
      >
        <TrendingCard />
        <View style={{ marginBottom: 14, paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <Text
              style={{ color: "white", fontSize: 18, fontFamily: "heading" }}
            >
              Trending Movies
            </Text>
            <Pressable onPress={() => console.log("Warra React Native")}>
              <Text style={{ color: "#1c82f0d6", fontSize: 16 }}>See all</Text>
            </Pressable>
          </View>
          <ScrollView
            alwaysBounceHorizontal={true}
            horizontal={true}
            style={{ columnGap: 20 }}
          >
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
          </ScrollView>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <Text
              style={{ color: "white", fontSize: 18, fontFamily: "heading" }}
            >
              Trending Movies
            </Text>
            <Pressable onPress={() => console.log("Warra React Native")}>
              <Text style={{ color: "#1c82f0d6", fontSize: 16 }}>See all</Text>
            </Pressable>
          </View>
          <ScrollView
            alwaysBounceHorizontal={true}
            horizontal={true}
            style={{ columnGap: 20 }}
          >
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
          </ScrollView>
        </View>
        <View style={{ marginBottom: 14, paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 24,
            }}
          >
            <Text
              style={{ color: "white", fontSize: 18, fontFamily: "heading" }}
            >
              Trending Movies
            </Text>
            <Pressable onPress={() => console.log("Warra React Native")}>
              <Text style={{ color: "#1c82f0d6", fontSize: 16 }}>See all</Text>
            </Pressable>
          </View>
          <ScrollView
            alwaysBounceHorizontal={true}
            horizontal={true}
            style={{ columnGap: 20 }}
          >
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
            <View style={{ marginRight: 12 }}>
              <MovieCard />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

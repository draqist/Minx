import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/MovieCard";

const MovieCard = () => {
  const {
    moviecard,
    moviecardInfo,
    moviecardHeaderText,
    moviecardImage,
    moviecardImageInner,
  } = styles;
  return (
    <Pressable style={moviecard}>
      <View style={moviecardImage}>
        <Image
          source={require("../assets/butter.jpg")}
          style={moviecardImageInner}
        />
      </View>
      <View style={moviecardInfo}>
        <Text style={moviecardHeaderText}>Violet Evergarden</Text>
      </View>
    </Pressable>
  );
};

export default MovieCard;

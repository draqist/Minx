import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/TrendingCard";

const TrendingCard = () => {
  const {
    cradContainer,
    cardInfo,
    cardHeaderText,
    cardImage,
    cardImageInner,
    cardInfoText,
    button,
    buttonText,
  } = styles;
  return (
    <View style={cradContainer}>
      <View style={cardInfo}>
        <Text style={cardHeaderText}>Violet Evergarden</Text>
        <Text style={cardInfoText}>
          After a great war, Violet Evergarden, a young ex-soldier woman works
          as writer dedicated to making people's feelings into words.
        </Text>
        <Pressable style={button}>
          <Text style={buttonText}> More Info</Text>
        </Pressable>
      </View>
      <View style={cardImage}>
        <Image
          source={require("../assets/butter.jpg")}
          style={cardImageInner}
        />
      </View>
    </View>
  );
};

export default TrendingCard;

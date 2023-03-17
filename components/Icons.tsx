import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";

const Icons = ({ isFocused, route }: any) => {
  if (route === "Home") {
    return (
      <Ionicons
        name="ios-home-outline"
        size={24}
        color={isFocused ? "#832b6d" : "gray"}
      />
    );
  }
  if (route === "Movies") {
    return (
      <MaterialCommunityIcons
        name="movie"
        size={24}
        color={isFocused ? "#832b6d" : "gray"}
      />
    );
  } else if (route === "Actors") {
    return (
      <Ionicons
        name="ios-people-outline"
        size={24}
        color={isFocused ? "#832b6d" : "gray"}
      />
    );
  } else {
    return (
      <AntDesign
        name="profile"
        size={24}
        color={isFocused ? "#832b6d" : "gray"}
      />
    );
  }
};

{
  /*
    Code below is for adding labels to the icons
    <View style={{flexDirection: "column", alignItems: "center"}}>
        <Ionicons name="ios-home-outline" size={24} color={isFocused ? '#832b6d' : 'gray'} />
        <Text style={{color: "gray"}}>{route}</Text>
    </View>  */
}
export default Icons;

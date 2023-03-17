import React from "react";
import { Pressable, View } from "react-native";
import styles from "../styles/BottomTab";
import Icons from "./Icons";

const TabComponent = ({ state, descriptors, navigation }: any) => {
  const { container, mainTab, innerTab } = styles;
  return (
    <View style={container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <View key={index} style={mainTab}>
            <Pressable
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                backgroundColor: isFocused ? "#030D16" : "#182028",
                borderRadius: 20,
              }}
            >
              <View style={innerTab}>
                <Icons route={label} isFocused={isFocused} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabComponent;

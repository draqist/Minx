import { Dimensions, StyleSheet } from "react-native";
// theme color === #12182A
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 35,
    backgroundColor: "#12182A",
    blurRadius: 9,
    borderRadius: 20,
    marginHorizontal: width * 0.05,
  },
  mainTab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 1,
    height: 60,
  },
  innerTab: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 15,
  },
});

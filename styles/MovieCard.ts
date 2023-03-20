import { StyleSheet } from "react-native";

export default StyleSheet.create({
  moviecard: {
    height: 280,
    backgroundColor: "#071047",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 170,
  },
  moviecardImage: {
    flex: 7,
    alignItems: "center",
    borderRadius: 10,
  },
  moviecardHeaderText: {
    color: "white",
    fontSize: 14,
    fontFamily: "heading",
  },
  moviecardInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  moviecardImageInner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

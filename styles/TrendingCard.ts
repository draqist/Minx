import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cradContainer: {
    height: 220,
    backgroundColor: "#071047",
    marginTop: 28,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  cardInfo: {
    flex: 3,
    alignItems: "flex-start",
    position: "relative",
  },
  cardHeaderText: {
    color: "white",
    fontSize: 23,
    fontFamily: "heading",
    marginBottom: 10,
  },
  cardInfoText: {
    color: "#ffffffd3",
    fontSize: 16,
    fontFamily: "text",
    lineHeight: 24,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007AFF",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  buttonText: {
    color: "#ffffffd3",
    fontSize: 18,
    fontFamily: "text",
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  cardImage: {
    flex: 1,
    alignItems: "flex-end",
    overflow: "hidden",
    justifyContent: "center",
  },
  cardImageInner: {
    width: 150,
    height: "100%",
    resizeMode: "cover",
  },
});

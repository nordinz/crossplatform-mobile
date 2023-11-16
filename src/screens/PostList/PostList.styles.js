import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "white",
    margin: 36,
    // border: 1px solid black
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 16,
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  postsTitle: {
    textAlign: "center",
    color: "#2196F3",
    fontSize: 30,
    marginTop: 10,
  },
  flex1: {
    flex: 1,
  },
  itemWrapper: {
    padding: 20,
    margin: 10,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 15,
    borderBlockColor: "black",
    borderWidth: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  dateText: {
    padding: 5,
    color: "#2196F3",
    fontSize: 12,
    textAlign: "center",
  },
  userText: {
    padding: 10,
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  postText: {
    padding: 10,
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
});
export default styles;

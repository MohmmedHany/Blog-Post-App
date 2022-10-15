import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id: navigation.getParam("id") });
        }}
      >
        <Entypo
          name="edit"
          size={35}
          color="black"
          style={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container : {
    margin : 10,
    borderWidth : 2,
    borderColor : "black",
    padding : 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  content : {
    fontSize : 18,
  }
});

export default ShowScreen;

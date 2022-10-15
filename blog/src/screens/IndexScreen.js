import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    });

    //clean up when index screen gets unmounted
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <Button
        title="Add A Blog Post"
        onPress={() => {
          navigation.navigate("Create");
        }}
      />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <AntDesign name="delete" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <AntDesign
          style={styles.headerIconStyle}
          name="pluscircleo"
          size={30}
          color="black"
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 18,
  },
  headerIconStyle: {
    marginRight: 15,
  },
});

export default IndexScreen;

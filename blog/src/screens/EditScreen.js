import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(title, content, id, () => {
            navigation.pop();
        });
      }}
      intialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({
  containter: {
    marginHorizontal: 5,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    fontSize: 18,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
});

export default EditScreen;

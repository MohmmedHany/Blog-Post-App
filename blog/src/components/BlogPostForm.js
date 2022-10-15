import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const BlogPostForm = ({ onSubmit, intialValues }) => {
  const [title, setTitle] = useState(intialValues.title);
  const [content, setContent] = useState(intialValues.content);

  return (
    <View style={styles.containter}>
      <Text style={styles.textStyle}>Enter The Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.textInputStyle}
      />
      <Text style={styles.textStyle}>Enter The Content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.textInputStyle}
      />
      <Button
        title="Submit"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  intialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;

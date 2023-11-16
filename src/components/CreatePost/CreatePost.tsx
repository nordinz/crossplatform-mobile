import React, { useState } from "react";
import InputText from "../../components/TextInput/InputText";
import { useRef } from "react";

import { SafeAreaView, View, Text } from "react-native";
import { Button, Icon } from "@rneui/base";
import { useCreatePostMutation } from "../../store/api/postsApi";
import { useSelector } from "react-redux";
import styles from "./CreatePost.styles";

type props = {
  onClose: () => void;
};

const CreatePost = ({ onClose }: props) => {
  const [createPost] = useCreatePostMutation();
  const [text, setText] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs);
  const user = loggedInAs;

  let now = new Date();
  let localDateString = now.toLocaleString("sv-SE", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(localDateString);
  const submitHandler = () => {
    console.log("submitting");

    if (text !== "") {
      setSubmitted(true);
      setFeedback(`Post Created`);
      setFeedback("");

      createPost({
        post: {
          createdBy: user?.firstName,
          createdDate: localDateString,
          text: text,
        },
      });
      onClose();
    } else {
      setSubmitted(false);
      setFeedback("Fyll i alla fält!");
    }
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <View>
        <View>
          <Text style={styles.modalText}>User: {user?.firstName}</Text>
          <InputText
            value={text}
            placeholder={"Start writing here"}
            onChangeText={(text) => setText(text)}
          />
          <View>
            <Button
              icon={{
                name: "plus-circle",
                type: "font-awesome",
                size: 25,
                color: "white",
              }}
              type="solid"
              color={"primary"}
              onPress={() => {
                submitHandler();
              }}
            >
              Create Post
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;

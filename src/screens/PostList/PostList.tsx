import React from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Modal,
} from "react-native";
import styles from "./PostList.styles";
import { useGetPostsQuery } from "../../store/api/postsApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ListItem } from "@rneui/base";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";

type ItemProps = {
  text: string;
  createdBy: string;
  createdDate: string;
};

const PostList = ({ route, navigation }) => {
  const { data, isLoading, error, refetch } = useGetPostsQuery({});
  const [showModal, setShowModal] = React.useState(false);

  const d = new Date().toString();
  console.log(d);

  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs);

  const user = route?.params?.user || loggedInAs;

  const Item = ({ text, createdBy, createdDate }: ItemProps) => (
    <View style={styles.itemWrapper}>
      <Text style={styles.userText}>Created by: {createdBy}</Text>
      <Text style={styles.dateText}>{createdDate}</Text>
      <View>
        <Text style={styles.postText}>{text}</Text>
      </View>
    </View>
  );

  if (error) return <Text>Error</Text>;
  if (isLoading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View style={styles.flex1}>
      <View>
        <Text style={styles.postsTitle}>POSTS</Text>
        {loggedInAs ? (
          <Text style={styles.postsTitle}>{`User: ${user?.firstName}`}</Text>
        ) : (
          <Text style={styles.postsTitle}> Not logged in</Text>
        )}
      </View>
      <View style={styles.flex1}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <Item
                text={item.text}
                createdBy={item.createdBy}
                createdDate={item.createdDate}
              />
            </>
          )}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        ></FlatList>
      </View>
      <View>
        {loggedInAs ? (
          <Button
            title={"Create New Post"}
            onPress={() => setShowModal(true)}
          />
        ) : (
          <Button
            title={"Login to create new Post"}
            onPress={() => navigation.navigate("UserList")}
          />
        )}
        <Modal
          visible={showModal}
          animationType={"slide"}
          onRequestClose={() => setShowModal(false)}
        >
          <CreatePost onClose={() => setShowModal(false)} />

          <Button title="Close" onPress={() => setShowModal(false)} />
        </Modal>
      </View>
    </View>
  );
};

export default PostList;

import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import styles from './PostList.styles';
import { useGetPostsQuery } from '../../store/api/postsApi';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ListItem } from '@rneui/base';
import { useSelector } from 'react-redux';

type ItemProps = {
  text: string;
  createdBy: string;
  createdDate: string;
};

const PostList = ({ route, navigation }) => {
  const { data, isLoading, error, refetch } = useGetPostsQuery({});

  const d = new Date().toString();
  console.log(d);

  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs);

  const user = route?.params?.user || loggedInAs;

  const Item = ({ text, createdBy, createdDate }: ItemProps) => (
    <View>
      <Text>
        Created by: {createdBy} | Date: {createdDate}
      </Text>
      <Text>{text}</Text>
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
    <SafeAreaView>
      <View>
        <Text style={styles.postsTitle}>POSTS</Text>
        {loggedInAs ? (
          <Text style={styles.postsTitle}>{`User: ${user?.firstName}`}</Text>
        ) : (
          <Text style={styles.postsTitle}> Not logged in</Text>
        )}
      </View>
      <View style={styles.container}>
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
          <Button title={'Create New Post'} />
        ) : (
          <Button
            title={'Login to create new Post'}
            onPress={() => navigation.navigate('UserList')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PostList;

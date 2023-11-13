import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import styles from './UserList.styles';
import { useGetUsersQuery } from '../../store/api/usersApi';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ListItem } from '@rneui/base';
import { useDeleteUserMutation } from '../../store/api/usersApi';
import EditUser from '../../components/EditUser/EditUser';
import { Modal } from 'react-native';

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

function UserList({ navigation }) {
  const [userId, setUserId] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const { data, error, isLoading, refetch } = useGetUsersQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const userToEdit = userId ? data.find((user) => user.id === userId) : null;
  function toggleEdit(id) {
    setUserId(id);
    setShowModal(true);
  }

  function onClose() {
    setShowModal(false);
  }

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <Text>Error</Text>;
  if (isLoading) return <Text>Laddar</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.userTitle}>UserList</Text>
      <View style={styles.refetchBtn}>
        {/* <Button
          icon={{
            name: 'refresh',
            type: 'font-awesome',
            size: 25,
            color: 'white',
          }}
          onPress={refetch}
        /> */}
      </View>
      <View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          style={styles.flatListStyle}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              onPress={() => navigation.navigate('UserInfo', { user: item })}
            >
              <View style={styles.item}>
                <View>
                  <Text style={styles.title}>
                    {item.firstName} {item.lastName}
                  </Text>
                </View>
                <View style={styles.buttonView}>
                  <Button
                    icon={{
                      name: 'trash-o',
                      type: 'font-awesome',
                      size: 25,
                      color: 'white',
                    }}
                    type="solid"
                    color={'error'}
                    onPress={() => {
                      handleDelete(item.id);
                    }}
                  />

                  <Button
                    icon={{
                      name: 'pencil',
                      type: 'font-awesome',
                      size: 25,
                      color: 'white',
                    }}
                    onPress={() => toggleEdit(item.id)}
                  />
                </View>
              </View>
            </ListItem>
          )}
          keyExtractor={(item) => item.id}
        />
        <Modal
          visible={showModal}
          animationType={'slide'}
          style={styles.modalView}
          onRequestClose={() => setShowModal(false)}
        >
          {userId && (
            <EditUser user={userToEdit} onClose={() => setShowModal(false)} />
          )}
          <Button title="Close" onPress={() => setShowModal(false)} />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default UserList;

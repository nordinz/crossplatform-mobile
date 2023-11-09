import { Button } from '@rneui/base';
import React from 'react';
import { View, Modal, Text, Pressable, Alert } from 'react-native';
import styles from './EditUser.styles';
import InputText from '../TextInput/InputText';
import { useUpdateUserMutation } from '../../store/api/usersApi';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}
type props = {
  user: User;
  onClose: () => void;
};

const EditUser = ({ user, onClose }: props) => {
  const [firstName, setFirstName] = React.useState(user.firstName);
  const [lastName, setLastName] = React.useState(user.lastName);
  const [updateUser] = useUpdateUserMutation();

  const submitHandler = async () => {
    try {
      await updateUser({
        user: {
          ...user,
          firstName: firstName,
          lastName: lastName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(firstName);

  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>EditUser</Text>
            <InputText
              placeholder={'firstName'}
              onChangeText={(firstName: React.SetStateAction<string>) =>
                setFirstName(firstName)
              }
              value={firstName}
            />
            <InputText
              placeholder={'lastName'}
              onChangeText={(lastName: React.SetStateAction<string>) =>
                setLastName(lastName)
              }
              value={lastName}
            />
            <Button
              title="Submit&Close"
              onPress={() => {
                submitHandler();
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default EditUser;

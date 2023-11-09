import { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useCreateUserMutation } from '../../store/api/usersApi';
import React from 'react';
import styles from './UserFrom.styles';

export const UserForm = (props) => {
  const { navigation } = props;
  const lastNameRef = React.useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleSubmit = () => {
    console.log('firstName: ', firstName);
    console.log('lastName: ', lastName);

    if (firstName === '' || lastName === '') {
      console.log('Invalid form!');

      return;
    }

    createUser({
      user: {
        firstName: firstName,
        lastName: lastName,
      },
    })
      .then(() => {
        navigation.navigate('UserList');

        setFirstName('');
        setLastName('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.parentContainer}>
        <View style={styles.container}>
          <Text style={styles.userTitle}>Create your user</Text>
          <Input
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current.focus()}
            blurOnSubmit={false}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name"
            disabled={isLoading}
          ></Input>
          <Input
            ref={lastNameRef}
            returnKeyType="send"
            onSubmitEditing={() => handleSubmit()}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last name"
            disabled={isLoading}
          ></Input>
          <Button
            disabled={isLoading}
            loading={isLoading}
            title="Create user"
            onPress={() => handleSubmit()}
          ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

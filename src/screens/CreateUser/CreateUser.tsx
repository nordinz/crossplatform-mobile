import React, { useState } from 'react';
import InputText from '../../components/TextInput/InputText';
import { useRef } from 'react';
import { useCreateUserMutation } from '../../store/api/usersApi';
import { SafeAreaView, View, Text } from 'react-native';
import { Button, Icon } from '@rneui/base';
import styles from './CreateUser.styles';

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const lastNameRef = React.useRef();

  const submitHandler = () => {
    console.log('submitting');

    if (firstName !== '' && lastName !== '') {
      setSubmitted(true);
      setFeedback(`Hej ${firstName} ${lastName}, wc!`);
      setTimeout(() => {
        setFeedback('');
        setFirstName('');
        setLastName('');
      }, 2000);

      createUser({
        user: {
          firstName: firstName,
          lastName: lastName,
        },
      });
    } else {
      setSubmitted(false);
      setFeedback('Fyll i alla fält!');
    }
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.refetchBtn}>
        <Icon
          name={'user-plus'}
          type="font-awesome"
          size={100}
          color="#1c87f2"
        />
      </View>
      <View>
        <InputText
          value={firstName}
          placeholder={'firstName'}
          onChangeText={(firstName: React.SetStateAction<string>) =>
            setFirstName(firstName)
          }
        />
        <InputText
          value={lastName}
          placeholder={'lastName'}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        <View style={styles.refetchBtn}>
          <Button
            icon={{
              name: 'user-plus',
              type: 'font-awesome',
              size: 25,
              color: 'white',
            }}
            type="solid"
            color={'primary'}
            onPress={() => {
              submitHandler();
            }}
          >
            Create User
          </Button>
        </View>
        {submitted && (
          <View>
            <Text style={styles.title}>{feedback}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;

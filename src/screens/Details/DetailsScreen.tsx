import { Button, Icon } from '@rneui/base';
import React from 'react';
import { View, Text } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      <Text>Details Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
        color={'secondary'}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        color={'success'}
        type={'outline'}
      />
      <Button
        title="Go to UserList"
        onPress={() => navigation.navigate('UserList')}
        radius={'lg'}
        color={'error'}
        icon={{
          name: 'user-circle',
          type: 'font-awesome',
          size: 25,
          color: 'white',
        }}
      >
        UserList
      </Button>
    </View>
  );
}

export default DetailsScreen;

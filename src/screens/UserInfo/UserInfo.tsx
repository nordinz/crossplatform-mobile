import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { logIn, logOut } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './UserInfo.styles';

export const UserInfo = ({ route }) => {
  const loggedInAs = useSelector((state: any) => state.auth.loggedInAs);

  const user = route?.params?.user || loggedInAs;

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text
          h4
          style={styles.title}
        >{`${user?.firstName} ${user?.lastName}`}</Text>
        {loggedInAs ? (
          <Button
            onPress={() => dispatch(logOut(user))}
            title={'LogOut'}
            color={'secondary'}
          />
        ) : (
          <Button onPress={() => dispatch(logIn(user))} title={'LogIn'} />
        )}
      </View>
    </SafeAreaView>
  );
};

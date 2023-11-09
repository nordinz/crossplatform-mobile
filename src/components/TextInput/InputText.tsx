import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './InputText.styles';

function InputText({ placeholder, onChangeText, value }) {
  const [focus, setFocus] = React.useState(false);
  const custom = focus ? styles.textInputFocus : styles.textInput;
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        style={custom}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
}

export default InputText;

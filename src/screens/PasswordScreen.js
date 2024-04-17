import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const PasswordScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={styles.text}>Enter Password</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setText(newValue)}
      />
      {text.length < 5 ? (
        <Text>Password is too short!</Text>
      ) : (
        <Text>That's a good password.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  textInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default PasswordScreen;

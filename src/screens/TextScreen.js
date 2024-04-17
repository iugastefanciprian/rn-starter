import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={styles.text}>What's your name?</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>My name is {text}</Text>
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
    borderWidth: '1px',
  },
});

export default TextScreen;

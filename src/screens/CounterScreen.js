import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase Counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease Counter"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.text}>Counter Count</Text>
      <Text style={styles.text}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ text: { alignSelf: 'center' } });

export default CounterScreen;

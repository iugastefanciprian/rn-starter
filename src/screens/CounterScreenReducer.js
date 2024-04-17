import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_up':
      return { value: state.value + action.payload };
    case 'change_down':
      return { value: state.value + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <View>
      <Button
        title="Increase Counter"
        onPress={() => {
          dispatch({ type: 'change_up', payload: 1 });
        }}
      />
      <Button
        title="Decrease Counter"
        onPress={() => {
          dispatch({ type: 'change_down', payload: -1 });
        }}
      />
      <Text style={styles.text}>Counter Count</Text>
      <Text style={styles.text}>{state.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ text: { alignSelf: 'center' } });

export default CounterScreen;

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Stefan-Ciprian Iuga';
  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

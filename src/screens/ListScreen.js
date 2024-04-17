import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friends 1', age: '5' },
    { name: 'Friends 2', age: '6' },
    { name: 'Friends 3', age: '7' },
    { name: 'Friends 4', age: '8' },
    { name: 'Friends 5', age: '9' },
    { name: 'Friends 6', age: '51' },
    { name: 'Friends 7', age: '54' },
    { name: 'Friends 8', age: '58' },
    { name: 'Friends 9', age: '56' },
  ];
  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;

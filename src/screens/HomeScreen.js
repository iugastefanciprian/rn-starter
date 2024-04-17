import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Images')}
      />
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.button}
        title="Go to Counter with Reducer Demo"
        onPress={() => navigation.navigate('CounterReducer')}
      />
      <Button
        style={styles.button}
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.button}
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        style={styles.button}
        title="Go to Square with Reducer Demo"
        onPress={() => navigation.navigate('SquareReducer')}
      />
      <Button
        style={styles.button}
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <Button
        style={styles.button}
        title="Go to Password Demo"
        onPress={() => navigation.navigate('Password')}
      />
      <Button
        style={styles.button}
        title="Go to Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        style={styles.button}
        title="Go to Flex Demo"
        onPress={() => navigation.navigate('Flex')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

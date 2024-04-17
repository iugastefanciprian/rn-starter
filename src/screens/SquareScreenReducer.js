import React, { useReducer } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === {colorToChange: red || green || blue, amount: 15 || -15 }
  switch (action.type) {
    case 'change_red':
      // we're never going to do:
      // state.red = state.red - 15
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.amount > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return { red: 0, blue: 0, green: 0 };
  }
};

const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          alignSelf: 'center',
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: 'black', payload: 0 })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreenReducer;

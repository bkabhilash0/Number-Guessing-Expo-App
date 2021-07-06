import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View {...props} style={{ ...styles.container, ...props.style }}>
      <Text style={styles.numbers}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    color: Colors.accent,
    fontSize: 22,
  },
});

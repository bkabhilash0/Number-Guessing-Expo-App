import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.btnText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

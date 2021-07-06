import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
          // fadeDuration={1000}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your Phone Needed{' '}
          <Text style={styles.hightlight}>{props.roundsNumber}</Text> Rounds to
          Guess the Number{' '}
          <Text style={styles.hightlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 3,
    width: 300,
    maxWidth: '80%',
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

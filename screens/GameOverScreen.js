import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').height
  );

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => Dimensions.removeEventListener('change', updateLayout);
  });

  let imageDimensions = {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
  };

  if (deviceWidth < 400) {
    imageDimensions = {
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      borderRadius: (Dimensions.get('window').width * 0.3) / 2,
    };
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* <ImageBackground
        source={require('../assets/success.png')}
        style={{ flex: 1 }}
        resizeMode="cover"
        // fadeDuration={1000}
      > */}
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={{ ...styles.imageContainer, ...imageDimensions }}>
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
            <Text style={styles.hightlight}>{props.roundsNumber}</Text> Rounds
            to Guess the Number{' '}
            <Text style={styles.hightlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  hightlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
});

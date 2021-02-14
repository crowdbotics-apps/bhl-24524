import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

export default class Onboarding extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper showsButtons={true}>
          <View>
            <Image
              source={require('../images/GroupPicture.jpg')}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={require('../images/ChoatePondFacingKessel.jpg')}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={require('../images/AdafromSkyPOV.jpg')}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={require('../images/Adaonpond.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: height,
  },
});
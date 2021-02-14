import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

import Header from '/Users/zachd/Documents/GitHub/bhl-24524/src/screens/Header/Header.js';

const LocationPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, padding: 16}}>
        <Text style={{
            fontSize: 16,
            textAlign: 'center',
          }}>
            This is Location Page
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          Seidenberg {'\n'} Pace University
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationPage;

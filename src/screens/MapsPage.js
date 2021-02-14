// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

import Header from '/Users/zachd/Documents/GitHub/bhl-24524/src/screens/Header/Header.js';

const MapsPage = ({navigation}) => {
  return (
<SafeAreaView style={{flex: 1}}>
  <Header />
      <View style={{flex: 1, padding: 16}}>
        <Text style={{
            fontSize: 16,
            textAlign: 'center',
          }}>
            This is Maps Page
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          Seidenberg {'\n'} Pace Univesity
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MapsPage;
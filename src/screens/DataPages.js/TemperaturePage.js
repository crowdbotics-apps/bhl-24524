import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    SafeAreaView,
  } from 'react-native';
  import React, { Component } from 'react';
  import Icon from 'react-native-vector-icons/EvilIcons';
  
  import Header from '/Users/zachd/Documents/GitHub/bhl-24524/src/screens/Header/Header.js';
  
  export default class LinksPage extends Component {
    state = {};
    render() {
      return (
        <View style={styles.container}>
          
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
            <Text style={styles.linkText}>
              <Icon name="external-link" size={35} />
              https://www.mohfw.gov.in/
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.who.int/')}>
            <Text style={styles.linkText}>
              <Icon name="external-link" size={35} />
              https://www.who.int/
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.worldometers.info/coronavirus/')
            }>
            <Text style={styles.linkText}>
              <Icon name="external-link" size={35} />
              https://www.worldometers.info/coronavirus/
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://transformingindia.mygov.in/')
            }>
            <Text style={styles.linkText}>
              <Icon name="external-link" size={35} />
              https://transformingindia.mygov.in/
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.pmcares.gov.in/en/')}>
            <Text style={styles.linkText}>
              <Icon name="external-link" size={35} />
              https://www.pmcares.gov.in/en/
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    linkText: {
      fontSize: 18,
    },
    eader: {
      // backgroundColor: '#a6dcef',
      // shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 3.84,
      elevation: 8,
    },
  });
  
  
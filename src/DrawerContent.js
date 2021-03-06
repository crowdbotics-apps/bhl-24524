import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <Image
        style={styles.image}
        source={require('/Users/zachd/Documents/GitHub/bhl-24524/src/images/BlueCoLablogo.jpeg')}
      />
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Location');
        }}>
        <Text style={styles.text}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Alerts');
        }}>
        <Text style={styles.text}>Alerts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Links');
        }}>
        <Text style={styles.text}>Links</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Maps');
        }}>
        <Text style={styles.text}>Maps</Text>
      </TouchableOpacity>
       */}

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>Blue colab</Text>
        <Text style={styles.footertext}>Seidenberg, Pace University</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  links: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    color: '#000',
  },
  /*  icon: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  }, */
  image: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
    marginLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
});

/*   'https://www.pace.edu/seidenberg/blue-colab' */

/*
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  }, */

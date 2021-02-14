import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity, Image,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
      

        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" color="#000" size={30} />
        </TouchableOpacity>

        <Image
        style={styles.image}
        source={require('/Users/zachd/Documents/GitHub/bhl-24524/src/images/BlueCoLablogo.png')}/>

      </View>


     

    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',


    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
   image: {
    flex: 2,
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginRight: 10
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },

});

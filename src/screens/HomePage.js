
// http://vulcan.seidenberg.pace.edu/~lkeeley/temp/'
   

import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';

import Header from '/Users/zachd/Documents/GitHub/bhl-24524/src/screens/Header/Header.js';

const HomePage = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  // const cured = Data.recovered.value;
  // const deaths = Data.deaths.value;
  const getWidth = (x) => {
    if (isLoading) {
      return 0;
    } else {
      if (x == 'deaths') {
        const num = Math.floor(
          (Data.deaths.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      } else if (x == 'recovered') {
        const num = Math.floor(
          (Data.recovered.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      }
    }
  };

  return (
    <>
      <Header style={{flex: 1}} />
            <View style={{padding: 16}}>
            
            </View>
      
      <View style={{  height: 55, marginBottom: 15 }}>
        <TouchableOpacity // The Bulletin
          onPress={() =>
            Linking.openURL(
              'http://bluecolab.blogs.pace.edu/',
            )
          }
          style={{
            backgroundColor: '#2C3A47',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 25,
            alignItems: 'center',
            // flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <View  >
            <Text style={{ ...material.captionWhite, fontSize: 16, paddingTop: 5, paddingLeft: 30 }}>
                click for
              </Text>
            <Text style={{ ...material.display1White, fontSize: 24 }}>
            The Bulletin
              </Text>
            
           </View>
          {/* <Icon
            style={{ position: 'absolute' }}
            name="chevron-forward"
            size={30}
            color="#fff"
          /> */}
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //Temperature
          onPress={() => navigation.push('TemperaturePage')}
          style={{
            backgroundColor: '#25CCF7',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
          
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              
              ...material.display2White,
            }}>
            Temp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity //Dissolved Oxygen
          onPress={() => navigation.push('DOPage')}
          style={{
            backgroundColor: '#EAB543',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              
              ...material.display2White,
            }}>
            DO
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //pH
          onPress={() => navigation.push('pHPage')}
          style={{
            backgroundColor: '#3B3B98',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
      
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              
              ...material.display2White,
            }}>
            pH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity //Salinity
          onPress={() => navigation.push('SalinityPage')}
          style={{
            backgroundColor: '#82589F',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
          
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              
              ...material.display2White,
            }}>
            Salinity
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity //Conductivity
          onPress={() => navigation.push('ConductivityPage')}
          style={{
            backgroundColor: '#BDC581',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
          
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              
              ...material.display2White,
            }}>
            Cond
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity //Blue/Green Algae
          onPress={() => navigation.push('BGAPage')}
          style={{
            backgroundColor: '#58B19F',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,

            alignItems: 'center',
          }}>
                  
          <Text
            style={{
              position: 'absolute',
              bottom: 0,
              fontWeight: 'normal',
              ...material.display2White,
            }}>
            B/G A
          </Text>
        </TouchableOpacity>
      </View>

      
    </>
  );
};
export default HomePage;


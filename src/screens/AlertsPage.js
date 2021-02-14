// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import {Text, Divider} from 'react-native-elements';

import Header from '/Users/zachd/Documents/GitHub/bhl-24524/src/screens/Header/Header.js';

export default class AlertsPage extends Component {
  state = {
    location: {
      lat: '',
      lng: '',
    },
    covidDetails: {
      statename: '',
      active: '',
      confirmed: '',
      deaths: '',
      recovered: '',
    },
  };

  componentDidMount() {
    this.makerequest();
  }

  makerequest = () => {
    this.setState(this.setState({}), () => {
      var getStatename = async (posi) => {
        const lat = posi.coords.latitude;
        const lng = posi.coords.longitude;
        const res = await fetch(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=4AqHlYO2GfvAzIYT4NwAbvhz7Ch2uat5&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`,
        );
        const data = await res.json();
        // console.log(`location got is : ${data.results[0].locations[0].adminArea3}`);
        getStateData(data.results[0].locations[0].adminArea3);
      };

      var getStateData = async (information) => {
        const API_URL =
          'http://vulcan.seidenberg.pace.edu/~lkeeley/temp/db.json';
        const res = await fetch(API_URL);
        const info = await res.json();
        const matches = info.statewise.filter((items) => {
          const rgx = new RegExp(`^${information}`, 'gi');
          return items.state.match(rgx) || items.statecode.match(rgx);
        });
        const match = matches[0];
        if (match === undefined) {
          alert('match not found');
        } else {
          // console.log(`data got is: ${match.state}, ${match.confirmed},${match.deaths}, ${match.recovered}`);
          this.setState({
            covidDetails: {
              statename: match.state,
              active: match.active,
              confirmed: match.confirmed,
              deaths: match.deaths,
              recovered: match.recovered,
            },
          });
        }
      };
    });
  };

  getData = () => {
    this.setState(this.setState({}), () => {
      try {
        request(
          Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          }),
        ).then((res) => {
          if (res == 'granted') {
            Geolocation.getCurrentPosition((posi) => {
              // console.log(`Your posisition, Latitude:${posi.coords.latitude} Longitude:${posi.coords.longitude}`);
              getStatename(posi);
            });
          } else {
            alert('Location is not enabled');
          }
        });
      } catch (error) {
        console.log('location set error:', error);
      }

      var getStatename = async (posi) => {
        const lat = posi.coords.latitude;
        const lng = posi.coords.longitude;
        const res = await fetch(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=4AqHlYO2GfvAzIYT4NwAbvhz7Ch2uat5&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`,
        );
        const data = await res.json();
        // console.log(
        //   `location got is : ${data.results[0].locations[0].adminArea3}`,
        // );
        getStateData(data.results[0].locations[0].adminArea3);
      };

      var getStateData = async (information) => {
        const API_URL = 'https://api.covid19india.org/data.json';
        const res = await fetch(API_URL);
        const info = await res.json();
        const matches = info.statewise.filter((items) => {
          const rgx = new RegExp(`^${information}`, 'gi');
          return items.state.match(rgx) || items.statecode.match(rgx);
        });
        const match = matches[0];
        if (match === undefined) {
          alert('match not found');
        } else {
          // console.log(`data got is: ${match.state}, ${match.confirmed},${match.deaths}, ${match.recovered}`);
          this.setState({
            covidDetails: {
              statename: match.state,
              active: match.active,
              confirmed: match.confirmed,
              deaths: match.deaths,
              recovered: match.recovered,
            },
          });
        }
      };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Your Location" />
        <ScrollView />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 22,
  },
  cardItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardItemsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
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

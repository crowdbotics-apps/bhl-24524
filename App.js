/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
/* import SplashScreen from 'react-native-splash-screen'; */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

//import Screens
import HomePage from './src/screens/HomePage';
import AlertsPageNavigator from './src/screens/AlertsPage';
import LocationPage from './src/screens/LocationPage';
import LinksPage from './src/screens/LinksPage';
/* import MapsPage from './src/screens/MapsPage';
 */
import {DrawerContent} from './src/DrawerContent';

// import Onboarding from './src/screens/Onboarding/Onboarding';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

function MainPageNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      headerMode="true"
      // screenOptions={{...TransitionPresets.SlideFromRightIOS}}
    >

      {/* <MainStack.Screen name="Onboarding" component={Onboarding} /> */}
      <MainStack.Screen name="Home" component={HomePage} />
      <MainStack.Screen name="Alerts" component={AlertsPageNavigator} />
      <MainStack.Screen name="Location" component={LocationPage} />
      <MainStack.Screen name="Links" component={LinksPage} />
      {/*       <MainStack.Screen name="Maps" component={MapsPage} />
       */}
    </MainStack.Navigator>
  );
}

export default function App() {
  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    /* SplashScreen.hide(); */
    setInitRender(false);
  }, [initRender]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainPageNavigator"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{width: initRender ? null : '70%'}}>
        <Drawer.Screen name="MainPageNavigator" component={MainPageNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

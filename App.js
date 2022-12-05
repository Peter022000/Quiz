/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Home from './src/Home';
import Result from './src/Result';
import Test from './src/Test';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home page" component={Home} />
              <Drawer.Screen name="Result" component={Result} />
              <Drawer.Screen name="Title test #1" component={Test} />
              <Drawer.Screen name="Title test #2" component={Test} />
              <Drawer.Screen name="Title test #3" component={Test} />
              <Drawer.Screen name="Title test #4" component={Test} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;

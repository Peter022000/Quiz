/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Home from './src/Home';
import Result from './src/Result';
import Test from './src/Test';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
        }
    }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
            // clear error
        }
    }


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')

            if(value !== null) {
                return value
            }
            else {
                return null
            }
        } catch(e) {
            // error reading value
        }
    }

    const firstRun = async () => {
        let value = await getData('@storage_Key')

        if(value === null){
            let result = await storeData("true")
            Alert.alert(
                'Regulamin',
                'RegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulamin',
                [
                    {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false }
            )

        }
    };

    useEffect(() => {
        let firstRunResult = firstRun()
    }, []);



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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Home from './src/Home';
import Result from './src/Result';
import Test from './src/Test';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, BackHandler} from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
            // clear error
        }
    }

    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)

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
        //let clear = await clearAll()
        let value = await getData('@first_run_key')

        if(value === null){
            Alert.alert(
                'Regulamin',
                'RegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulaminRegulamin',
                [
                    {text: 'Zaakceptuj', onPress: async () => {
                            let result = await storeData('@first_run_key', "true")
                        }},
                    {text: 'Anuluj', onPress: () => {BackHandler.exitApp();}, style: 'cancel'},
                ],
                { cancelable: false }
            )
        }
    };

    useEffect(() => {
        let o = firstRun()
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

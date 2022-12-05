import React from 'react'
import {View, Text, TouchableOpacity, Linking, ScrollView, Button} from 'react-native';

const Home = ({ navigation }) => {

    return (
        <ScrollView style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{ margin: 30, padding: 10, borderWidth:  1}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Title test #1</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag1
                    </Text>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag2
                    </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </View>
            </View>
            <View style={{ margin: 30, padding: 10, borderWidth:  1}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Title test #2</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag1
                    </Text>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag2
                    </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </View>
            </View>
            <View style={{ margin: 30, padding: 10, borderWidth:  1}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Title test #3</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag1
                    </Text>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag2
                    </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </View>
            </View>
            <View style={{ margin: 30, padding: 10, borderWidth:  1}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Title test #4</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag1
                    </Text>
                    <Text style={{color: 'blue'}}
                          onPress={() => Linking.openURL()}>
                        #Tag2
                    </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10, borderWidth: 1, alignItems: 'center'}}>
                <View  style={{marginBottom: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15}}>Get to know your ranking result</Text>
                </View>
                <Button title="Check"/>
            </View>
        </ScrollView>
    )
}

export default Home

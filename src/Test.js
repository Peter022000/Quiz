import React from 'react'
import {View, Text, Button} from 'react-native';
import { ProgressBar} from 'react-native-paper';

const Test = ({ navigation }) => {

    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={{margin: 15}}>
                <Text style={{fontSize: 20}}>Question 1 of 10                    Time: 18 sec</Text>
            </View>
            <View>
                <ProgressBar style={{height: 16, margin: 20}} progress={0.1} color={'green'}  />
            </View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Example of long question</Text>
                <Text style={{fontSize: 15, margin: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <View style={{ margin: 30,padding: 30, borderWidth:  1, display: 'flex', flexDirection: 'column'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{display: 'flex', marginLeft: 30}}>
                        <Button title="Answer A"/>
                    </View>
                    <View style={{display: 'flex', marginLeft: 40}}>
                        <Button title="Answer B"/>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{display: 'flex', marginTop: 44, marginLeft: 30}}>
                        <Button title="Answer C"/>
                    </View>
                    <View style={{display: 'flex', marginTop: 44, marginLeft: 40}}>
                        <Button title="Answer D"/>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Test

import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Linking, ScrollView, Button} from 'react-native';
import { shadow } from 'react-native-paper';
import { black, lightBlue100, white } from 'react-native-paper/lib/typescript/styles/colors';

const Home = ({ navigation }) => {



    let ops = []
  for(let i = 0;i < 10;i++){
     ops.push(<TouchableOpacity key={"element_"+i} style={styles.testBTN} onPress={() => Linking.openURL()}>
        <View>
            <Text style={styles.titles}>Title test #{i+1}</Text>
        </View>
        <View style={styles.ConText}>
            <Text style={styles.blues} >#Tag1 </Text>
            <Text style={styles.blues} >#Tag2 </Text>
        </View>
        <View style={styles.ConText}>
            <Text style={styles.NRtext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
        </View>

    </TouchableOpacity>)

  }
    return (
        <ScrollView style={{display: 'flex', flexDirection: 'column'}}>
            {ops}
            <View style={styles.FooterBC}>
                <View>
                    <Text style={styles.FooterTEXT}>Get to know your ranking result</Text>
                </View>
                <TouchableOpacity  style={styles.FooterBTN}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Check</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container:{
     flex:1
    },
    blues: {
     color: 'lightblue'
    },
    ConText:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    titles:{
        fontWeight: 'bold',
        fontSize:20,
    },
    NRtext:{
        color:'black',
        fontSize: 14,
    },
    testBTN:{
        margin: 30,
        border:  'black',
        borderWidth: 1,
        padding: 15
    },
    FooterBTN:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
    },
    FooterTEXT:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
    },

    FooterBC:{ padding: 10, borderWidth: 1, alignItems: 'center'},


   });
export default Home

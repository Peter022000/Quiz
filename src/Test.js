import React from 'react'
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { ProgressBar} from 'react-native-paper';

const Test = ({ navigation }) => {

    return (
        <View style={styles.testCONT}>
            <View style={{margin: 15}}>
                <Text style={styles.qustionsNUM}>Question 1 of 10                    Time: 18 sec</Text>
            </View>
            <View>
                <ProgressBar style={{height: 16, margin: 20}} progress={0.1} color={'green'}  />
            </View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Example of long question</Text>
                <Text style={{fontSize: 15, margin: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            </View>
            <View style={styles.answers}>
                <View style={styles.rows}>
                    <View style={styles.BRNtop}>
                        <TouchableOpacity title="Answer A" style={styles.btn}>
                            <Text style={styles.NRtext}>Answer A</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BRNtop}>
                        <TouchableOpacity title="Answer B" style={styles.btn}>
                            <Text style={styles.NRtext}>Answer B</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rows}>
                    <View style={styles.BRNdown}>
                        <TouchableOpacity title="Answer C" style={styles.btn}>
                            <Text style={styles.NRtext}>Answer C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BRNdown}>
                        <TouchableOpacity title="Answer D" style={styles.btn}>
                            <Text style={styles.NRtext}>Answer D</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1
    },
    rows:{
        flexDirection: 'row' ,
        display:'flex',
        alignItems:'center',
    },
    qustionsNUM:{
        fontSize: 20,
    },
    testCONT:{
        display: 'flex',
        flexDirection: 'column' ,

    },
    answers:{
        margin: 30,
        padding: 30,
        display: 'flex',
        flexDirection: 'column'},
    blues: {
        display: 'flex',
    },
    BRNtop:{
        display: 'flex', marginTop: 44, marginLeft: 10, marginRight: 70 ,height:'100%',
    },
    BRNdown:{
        display: 'flex', marginTop: 44, marginLeft: 10, marginRight: 70,height:'150%',
    },
    btn:{
        backgroundColor:'#b2b2b2',
        width:'200%',
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    titles:{
        fontWeight: 'bold',
        fontSize:20,
    },
    NRtext:{
        fontSize:14,
    },
    testBTN:{
        margin: 30,
        padding: 10,
        border:  'black',
        borderRadius: 25,
        backgroundColor: '#5300B0',
        elevation: 20,
    },
   });

export default Test

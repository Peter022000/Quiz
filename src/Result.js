import React, {Component} from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Nick', 'Points', 'Type', 'Date'],
            tableData: [
                ['asd', '2/20', 'test1', '1-1-2020'],
                ['awe', '3/20', 'test1', '2-1-2020'],
                ['qwe', '13/20', 'test1', '3-1-2020'],
                ['zsd', '15/20', 'test1', '4-1-2020']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.blues}>
                <Table borderStyle={{borderWidth: 2}}>
                    <Row data={state.tableHead} style={{height: 40}} textStyle={styles.titles}/>
                    <Rows data={state.tableData} textStyle={styles.NRtext} />
                </Table>
            </View>
        )
    }

}
//style={{flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
const styles = StyleSheet.create({
    container:{
     flex:1
    },
    blues: {
        color: 'lightblue',
        elevation: 20,
        marginTop:20,
        padding: 10
    },
    titles:{
        fontWeight: 'bold',
        fontSize:20,
        margin: 6,
    },
    NRtext:{
        fontSize:15,
        margin: 6,
    },

   });


// const Result = ({ navigation }) => {
//     let tableHead: ['Nick', 'Points', 'Type', 'Date'];
//     let tableData: [
//         ['asd', '2/20', 'test1', '1-1-2020'],
//         ['awe', '3/20', 'test1', '2-1-2020'],
//         ['qwe', '13/20', 'test1', '3-1-2020'],
//         ['zsd', '15/20', 'test1', '4-1-2020']];
//
//     return (
//         <View style={styles.container}>
//             <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//                 <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
//                 <Rows data={tableData} textStyle={styles.text}/>
//             </Table>
//         </View>
//     )
//
// }
//
// export default Result

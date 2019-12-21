import React from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import StudentItem from '../components/StudentItem';


const TeacherDashboardScreen = props => {

return(<ScrollView>
<View style = {styles.row}>
    <View style = {styles.col}>
        <Text>Dashboard</Text>
    </View>
    <View style = {styles.col}>
        <Text>Dashboard</Text>
    </View>
</View>
<View style = {styles.row}>
    <View style = {styles.col}>
        <Text>Dashboard</Text>
    </View>
    <View style = {styles.col}>
        <Text>Dashboard</Text>  
    </View>
</View>
<View style = {styles.row}>
    <View style = {styles.col}>
        <Text>Dashboard</Text>
    </View>
    <View style = {styles.col}>
        <Text>Dashboard</Text>  
    </View>
</View>
</ScrollView>
);
};
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%'
    },
    col: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
TeacherDashboardScreen.navigationOptions = {
    headerTitle: 'Teacher Dashboard'
};
export default TeacherDashboardScreen;


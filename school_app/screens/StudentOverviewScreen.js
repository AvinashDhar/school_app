import React from 'react';
import {FlatList, Text} from 'react-native';
import { useSelector } from 'react-redux';
import StudentItem from '../components/StudentItem';


const StudentsOverviewScreen = props => {

const students = useSelector(state => state.students.availableStudents);
return(<FlatList data = {students} 
renderItem = {
    itemData => 
    <StudentItem image = {itemData.item.imageUrl} 
    rollNum = {itemData.item.rollNum}
    name = {itemData.item.name}
    onViewDetail = {() => {
        props.navigation.navigate('StudentDetail', 
        { studentId: itemData.item.id,
        studentTitle: itemData.item.name });

    }}
    onEditDetail = {() => {}} />
    }
    keyExtractor={item => item.id.toString()} />);
};

StudentsOverviewScreen.navigationOptions = {
    headerTitle: 'All Students'
};
export default StudentsOverviewScreen;


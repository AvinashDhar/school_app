import React from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';

const StudentDetailScreen = props => {
const selectedId = props.navigation.getParam('studentId');
const selectedProduct = useSelector(state => 
    state.students.availableStudents.find(student => student.id === selectedId));
    return(
    <View>
        <Text>{selectedProduct.regNum}</Text>
    </View>
    );

};

StudentDetailScreen.navigationOptions = navData => {
    return {
   headerTitle: navData.navigation.getParam('studentTitle')
};
};

export default StudentDetailScreen;


import React from 'react';
import {FlatList, Text, Platform} from 'react-native';
import { useSelector } from 'react-redux';
import StudentItem from '../components/StudentItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';

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

StudentsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Students',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          )
    }
    
};
export default StudentsOverviewScreen;


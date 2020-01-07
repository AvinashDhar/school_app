import React from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet, Image, Platform} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';

const StudentDetailScreen = props => {
const selectedId = props.navigation.getParam('studentId');
const selectedProduct = useSelector(state => 
    state.students.availableStudents.find(student => student.id === selectedId));
    return(
    <ScrollView>
        <View>
            <Image source = {{uri:selectedProduct.imageUrl}} style = {styles.image} />
        </View>
        <View style = {styles.detail}>
            <Text>
                Name: {selectedProduct.name}
            </Text>
            <Text>
                Class: {selectedProduct.standard}
            </Text>
        </View>
        

    </ScrollView>
    );

};

StudentDetailScreen.navigationOptions = navData => {
    return {
   headerTitle: navData.navigation.getParam('studentTitle'),
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
};
};

const styles = StyleSheet.create({
image: {
    width: '100%',
    height: 300
},
detail:{
    fontSize: 14,
    alignItems:'center',
    marginVertical: 20
}

});
export default StudentDetailScreen;


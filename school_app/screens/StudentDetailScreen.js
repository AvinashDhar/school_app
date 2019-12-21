import React from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';

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
   headerTitle: navData.navigation.getParam('studentTitle')
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


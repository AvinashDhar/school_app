import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Student from '../models/student';
import Colors from '../constants/Colors';

const StudentItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >=21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style = {styles.student}>
            <View style = {styles.touchables}>
                <TouchableCmp onPress = {props.onViewDetail} useForeground>
                    <View>
                        <View style = {styles.studentDetail}>
                            <View style = {styles.imageContainer}>
                                <Image style = {styles.image} source = {{uri: props.image}} />
                            </View>
                            <View style = {styles.details}>
                                <Text style = {styles.rollNum}>Roll Number: {props.rollNum}</Text>
                                <Text style = {styles.name}>Name: {props.name}</Text>
                                <View style = {styles.actions}>
                                    <View style = {styles.buttonStyle}>
                                        <Button color = {Colors.primary} title = "View" onPress = {props.onViewDetail} />
                                    </View>
                                    <View style = {styles.buttonStyle}>
                                        <Button color = {Colors.primary} title = "Edit" onPress = {props.onEditDetail}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    student: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 150,
        margin: 20,
    },
    touchables: {
        overflow: "hidden",
        borderRadius: 10
    },
    studentDetail: {
        height:'100%',
        width:'100%',
        flexDirection: 'row',
        paddingVertical: 10
    },
    details: {
        alignItems: 'center',
        width: '60%',
        height:'100%'
    },
    imageContainer: {
        width: '40%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    rollNum: {
        fontSize: 14,
        color: '#888'
    },
    name: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row'
    },
    buttonStyle: {
        flex: 1,
        paddingHorizontal: 4
    }
});

export default StudentItem;
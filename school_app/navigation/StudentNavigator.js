import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import StudentOverviewScreen from '../screens/StudentOverviewScreen';
import StudentDetailScreen from '../screens/StudentDetailScreen';
import TeacherDashboardScreen from '../screens/TeacherDashboardScreen';
import AuthScreen from '../screens/AuthScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  };

const StudentNavigator = createStackNavigator({
   
    StudentOverview: StudentOverviewScreen,
    StudentDetail: StudentDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

const AuthNavigator = createStackNavigator(
    {
      Auth: AuthScreen
    },
    {
      defaultNavigationOptions: defaultNavOptions
    }
  );

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Student: StudentNavigator
  });

export default createAppContainer(MainNavigator);

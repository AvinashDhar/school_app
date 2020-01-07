import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import StudentOverviewScreen from '../screens/StudentOverviewScreen';
import StudentDetailScreen from '../screens/StudentDetailScreen';
import DashboardScreen from '../screens/DashboardScreen';
import StartupScreen from '../screens/StartupScreen';
import AuthScreen from '../screens/AuthScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


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

const DashboardNavigator  = createStackNavigator(
  {
    Dashboard: DashboardScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

  const SchoolNavigator = createDrawerNavigator(
    {
      Students: StudentNavigator,
      Dashboard: DashboardNavigator,
      
    },
    {
      contentOptions: {
        activeTintColor: Colors.primary
      }
    }
  );

const MainNavigator = createSwitchNavigator({
    startup: StartupScreen,
    Auth: AuthNavigator,
    School: SchoolNavigator
  });

export default createAppContainer(MainNavigator);

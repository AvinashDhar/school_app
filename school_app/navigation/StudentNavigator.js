import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StudentOverviewScreen from '../screens/StudentOverviewScreen';
import StudentDetailScreen from '../screens/StudentDetailScreen';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';

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

export default createAppContainer(StudentNavigator);

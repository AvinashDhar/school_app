import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import StudentReducer from './store/reducers/students';
import StudentNavigator from './navigation/StudentNavigator';

const rootReducer = combineReducers({
  students : StudentReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded ] = useState(false);
  if (!fontLoaded){
    return <AppLoading startAsync = {fetchFonts} 
    onFinish = {() => {
      setFontLoaded(true);
    }
  } />
}
  return (
    <Provider store = {store}>
      <StudentNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

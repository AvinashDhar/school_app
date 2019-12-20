import React from 'react';
import { StyleSheet} from 'react-native';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import StudentReducer from './store/reducers/students';
import StudentNavigator from './navigation/StudentNavigator';

const rootReducer = combineReducers({
  students : StudentReducer
});

const store = createStore(rootReducer);

export default function App() {
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
  },
});

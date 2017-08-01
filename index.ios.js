/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// App modules
import store from './src/redux/store';
import AppViewContainer from './src/appViewContainer';

export default class AppIndex extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('reactnativeBoilerplate', () => AppIndex);

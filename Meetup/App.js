/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './src/constants/colors';
import { HomeScreen } from './src/screen/';

EStyleSheet.build(Colors);

export default class App extends Component {
  render() {
    return <HomeScreen />;
  }
}


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
  Navigator,
  View
} from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'


export default class simple extends Component {
  render() {
    return (
      <AnimatedLinearGradient customColors={presetColors.firefox} speed={1000}/>
  );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('simple', () => simple);

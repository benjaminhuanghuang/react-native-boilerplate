/*
  AppView Container
*/
import React, {Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

export default class AppViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return ( 
      <View>
        <Text>
          I am Benjamin!
        </Text> 
      </View>
    );
  }
}
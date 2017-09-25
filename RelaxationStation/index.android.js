import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Quote from './Quote'

var Navigator = require('react-native-deprecated-custom-components');

const zenImage = require('./assets/zen.png')

export default class RelaxationStation extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen'}}
        renderScene={(route, navigator) => {
          return (
              <View style={styles.container}>
              {/*} <TouchableOpacity style={styles.button} onPress={() => {alert('button pressed!')}}>
                    <Image source={zenImage} style={styles.buttonImage} />
                  </TouchableOpacity>
                  <Text style={styles.readyText}>I'm ready to relax...</Text>*/}
                <Quote quoteText='Amazing Quote' quoteSource='- Great Source.'/>
              </View>
            )
        }}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },

  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color:'#ffffff',
  },  

  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },

  buttonImage: {
    width: 100,
    height: 100,
  },
});

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);

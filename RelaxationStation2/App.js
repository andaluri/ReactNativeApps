import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const { quotes } = require('./quotes.json')
const zenImage = require('./assets/zen.png')
const bgImage = require('./assets/bg.png')

class QuoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Quotes',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.quoteContaner}> 
          <Text style={styles.quoteText}>"{params.text}"</Text>
          <Text style={styles.sourceText}>- {params.source}</Text>
        </View>
        <TouchableOpacity style={styles.nextQuoteButton}>
          <Text style={styles.nextQuoteButtonText}>Next Thought</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quoteIndex: 2,
    }
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    quote = quotes[this.state.quoteIndex]
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigate('Quotes', {text:quote.text, source:quote.source})}}>
              <Image source={zenImage} style={styles.buttonImage} />
              <Text style={styles.readyText}>I'm ready to relax...</Text>                  
            </TouchableOpacity>
        </View>
    );
  }
}

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Quotes: { screen: QuoteScreen },
});

const styles = StyleSheet.create({

  quoteContaner: {
    flex: 1,
    justifyContent: 'center',
  },

  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor:'transparent',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },

  quoteText: {
    fontFamily: (Platform.OS=='ios') ? 'AvenirNext-Bold':'Roboto',
    fontSize: 36,
    color: '#ffffff',
    marginVertical: 30,
  },

  sourceText: {
    fontFamily: (Platform.OS=='ios') ? 'AvenirNext-Italic':'Roboto',
    fontSize: 20,
    color: '#f8f8f8',
    textAlign: 'right',
    fontStyle: 'italic',
  },

  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color:'#020c1c',
    textAlign:'center',
  },  

  button: {
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },

  nextQuoteButton: {
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
  },

  nextQuoteButtonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },

  buttonImage: {
    width: 200,
    height: 200,
  },
});

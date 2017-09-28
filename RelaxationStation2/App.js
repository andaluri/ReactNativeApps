import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Platform,
  LayoutAnimation,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const { quotes } = require('./quotes.json')
const zenImage = require('./assets/zen.png')
const bgImage = require('./assets/bg.png')
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 1000,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  },
}


class QuoteScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      quoteIndex: 2,
    }
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil)
  }

  updateQuoteIndex() {
    let newIndex
    if (this.state.quoteIndex + 1 == quotes.length) {
      newIndex = 0
    } else {
      newIndex = this.state.quoteIndex + 1
    }
    this.setState({
      quoteIndex: newIndex
    })
  }

  static navigationOptions = {
    title: 'Quotes',
  };
  render() {
    quote = quotes[this.state.quoteIndex]
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.quoteContaner}> 
          <Text style={styles.quoteText}>"{quote.text}"</Text>
          <Text style={styles.sourceText}>- {quote.source}</Text>
        </View>
        <TouchableOpacity style={styles.nextQuoteButton} onPress={() => this.updateQuoteIndex()}>
          <Text style={styles.nextQuoteButtonText}>Next Thought</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigate('Quotes')}}>
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

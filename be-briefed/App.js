import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/MainContainer'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          selectedService: 'db',
          services: [
                  { key: 'web',  isUp: true,  lastUpTime: null },
                  { key: 'db',   isUp: false, lastUpTime: (new Date((new Date()).getTime() - 5 * 60 * 1000))},
                  { key: 'mail', isUp: true,  lastUpTime: null },
                ],
        }
    }
    render() {
        return (
            <MainContainer 
              selectedService={this.state.selectedService}
              services={this.state.services}
            />
        )
    }
}

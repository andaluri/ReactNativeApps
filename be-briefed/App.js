import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/MainContainer'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUp: false,
            lastUptime: new Date((new Date()).getTime() - 5 * 60 * 1000),
        }
    }
    render() {
        return (
            <MainContainer isUp={this.state.isUp} lastUptime={this.state.lastUptime}/>
        )
    }
}

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/MainContainer'

const isUp = true

export default class App extends React.Component {
    render() {
        return (
            <MainContainer isUp={isUp}/>
        )
    }
}

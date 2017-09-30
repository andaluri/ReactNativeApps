import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import StatusIndicator from './StatusIndicator'

class StatusScreen extends Component {
	render() {
		let lastUpComponent
		if (!this.props.isUp) {
			lastUpComponent = <Text style={styles.lastUpText}>Last up: {this.props.lastUptime}</Text>
		}
		return (
			<View style={styles.container}>
				<StatusIndicator isUp={this.props.isUp}/>
				<Text style={styles.statusText}>Service {this.props.isUp ? 'Up' : 'Down!'}</Text>
				{lastUpComponent}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	statusText: {
		fontSize: 30,
	},

	lastUpText: {
		fontSize: 20,
		marginTop: 20,
		textAlign: 'center',
		color: '#b1b3b6',
		backgroundColor: 'rgba(0,0,0,0)',
	},
})

export default StatusScreen


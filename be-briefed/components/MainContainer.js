import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'

class MainContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusScreen isUp={this.props.isUp} lastUptime={this.props.lastUptime}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default MainContainer

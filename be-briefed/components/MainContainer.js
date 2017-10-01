import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'
import TabBarContainer from './TabBarContainer'

class MainContainer extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusScreen isUp={this.props.isUp} lastUptime={this.props.lastUptime}/>
				<TabBarContainer />
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

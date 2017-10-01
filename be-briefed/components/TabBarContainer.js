import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import Tabs from 'react-native-tabs'

const TabBarContainer = (props) => (
	<Tabs style={styles.tabContainer}>
		<Text>Web</Text>
		<Text>DB</Text>
		<Text>Mail</Text>
	</Tabs>
)

const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: '#343434',
		borderTopWidth: 1,
		borderTopColor: '#262626',
		height: 96,
	}
})

export default TabBarContainer


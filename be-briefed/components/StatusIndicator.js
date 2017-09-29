import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

const StatusIndicator = (props) => (
	<View style={styles.border}>
		<Text style={styles.character}>X</Text>
	</View>
)

const styles = StyleSheet.create({
	border: {
		borderWidth: 20,
		borderColor: '#F21D44',
		borderRadius: 200,
		width: 240,
		height: 240,
		justifyContent: 'center',
	},
	character: {
		fontSize: 160,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#BF1534',
	},
})

export default StatusIndicator


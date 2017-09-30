import React from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const StatusIndicator = ({ isUp }) => (
  <View style={[styles.border, isUp && styles.isUpBorderColor]}>
    <Text style={[styles.character, isUp && styles.isUpCharacterColor]}>
      <Icon name={isUp ? 'check' : 'times'} size={160} />
    </Text>
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

  	isUpBorderColor: {
    	borderColor: '#189963',
  	},

  	isUpCharacterColor: {
    	color: '#189963',
	},	
})

export default StatusIndicator


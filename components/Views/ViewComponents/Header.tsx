import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {IHeader} from '../../Interfaces/IViewComponents';

const Header = ({title}: IHeader) => (
	<View style={styles.header} >
		<Text style={styles.text}>{title}</Text>
	</View>
);

Header.defaultProps = {
	title: 'Crypto App',
};

const widthScreen: number = Dimensions.get('window').width;

const styles = StyleSheet.create({
	header: {
		height: 60,
		width: widthScreen,
		padding: 15,
		backgroundColor: 'darkslateblue',
	},
	text: {
		color: 'white',
		fontSize: 23,
		textAlign: 'center',
	},
});

export default Header;

import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCryptoDataItem} from '../../Redux/Slices/CryptoData';

const LogoTitle = () => {
	const dataItem = useSelector(selectCryptoDataItem);

	if (dataItem === null) {
		return (
			<View style={styles.title}>
				<Text style={styles.text}>Crypto Not Found</Text>
			</View>);
	}

	return (
		<View style={styles.title}>
			<Image
				style={styles.logo}
				source={{
					uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${dataItem.id}.png`,
				}} />
			<Text style={styles.text}>{dataItem.symbol}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		flexDirection: 'row',
	},
	logo: {
		width: 32,
		height: 32,
	},
	text: {
		paddingLeft: 10,
		textAlignVertical: 'center',
		fontSize: 20,
	},
});

export default LogoTitle;

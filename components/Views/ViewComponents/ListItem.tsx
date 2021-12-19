import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IListItem} from '../../Interfaces/IViewComponents';
import {useDispatch, useSelector} from 'react-redux';
import {
	selectStateDisplayEUR,
	selectStateHighlightChainlink,
} from '../../Redux/Slices/UserSettings';
import {
	setCryptoDataItem,
	setIsFavoriteToFalse,
	setIsFavoriteToTrue,
} from '../../Redux/Slices/CryptoData';

const ListItem = ({item, navigation}: IListItem) => {
	const dispatch = useDispatch();
	const stateDisplayEUR = useSelector(selectStateDisplayEUR);
	const stateHighlightChainlink = useSelector(selectStateHighlightChainlink);
	const valuta = stateDisplayEUR ? 'EUR' : 'USD';
	const valutaSymbol: string = stateDisplayEUR ? '€' : '$';
	let price: number = 0;
	let percent24h: number = 0;
	if (item.quote[valuta] !== null && item.quote[valuta] !== undefined) {
		price = item.quote[valuta]!.price;
		percent24h = item.quote[valuta]!.percent_change_24h;
	}

	// Toggle favorites
	const btnPress = (): void => {
		try {
			if (!item.isFavorite) {
				dispatch(setIsFavoriteToTrue(item));
			} else if (item.isFavorite) {
				dispatch(setIsFavoriteToFalse(item));
			}
		} catch (e) {
			console.log(e);
		}
	};

	// Chainlink formatting
	if (item.id === 1975 && stateHighlightChainlink) {
		return (
			<TouchableOpacity
				style={styles.listItemChainlink}
				onPress={() => {
					dispatch(setCryptoDataItem(item));
					navigation.navigate('Crypto Details');
				}}>
				<View style={styles.listItemView}>
					<Text style={styles.listItemNameChainlink}>{item.name}</Text>
					<Text style={styles.listItemPriceChainlink}>
						{price < 1
							? `${valutaSymbol}${price.toPrecision(4)}`
							: `${valutaSymbol}${price.toFixed(2)}`}
					</Text>
					<Text
						style={
							percent24h < 0
								? styles.listItemPercentNegativeChainlink
								: styles.listItemPercentPositiveChainlink
						}>
						{percent24h.toFixed(2)}%
					</Text>

					<Icon
						style={
							item.isFavorite
								? styles.favIconIsFavoriteTrue
								: styles.favIconIsFavoriteFalse
						}
						name="star"
						onPress={() => btnPress()}></Icon>
				</View>
			</TouchableOpacity>
		);
	}

	// Regular Formatting
	return (
		<TouchableOpacity
			style={styles.listItem}
			onPress={() => {
				dispatch(setCryptoDataItem(item));
				navigation.navigate('Crypto Details');
			}}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemName}>{item.name}</Text>
				<Text style={styles.listItemPrice}>
					{price < 1
						? `${valutaSymbol}${price.toPrecision(4)}`
						: `${valutaSymbol}${price.toFixed(2)}`}
				</Text>
				<Text
					style={
						percent24h < 0
							? styles.listItemPercentNegative
							: styles.listItemPercentPositive
					}>
					{percent24h.toFixed(2)}%
				</Text>
				<Icon
					style={
						item.isFavorite
							? styles.favIconIsFavoriteTrue
							: styles.favIconIsFavoriteFalse
					}
					name="star"
					onPress={() => btnPress()}></Icon>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		justifyContent: 'center',
		fontSize: 16,
		padding: 10,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	listItemChainlink: {
		justifyContent: 'center',
		fontSize: 16,
		padding: 10,
		backgroundColor: '#375bd2', // Chainlink blue
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	listItemNameChainlink: {
		width: 130,
		color: 'white',
	},
	listItemPriceChainlink: {
		width: 100,
		color: 'white',
	},
	listItemPercentNegativeChainlink: {
		width: 75,
		textAlign: 'right',
		color: '#6e0511', // Red
	},
	listItemPercentPositiveChainlink: {
		width: 75,
		textAlign: 'right',
		color: '#8acc26', // Green
	},
	listItemView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemName: {
		width: 130,
	},
	listItemPrice: {
		width: 100,
	},
	listItemPercentNegative: {
		width: 75,
		textAlign: 'right',
		color: 'red',
	},
	listItemPercentPositive: {
		width: 75,
		textAlign: 'right',
		color: 'green',
	},
	listItemFavorite: {
		width: 50,
	},
	favIconIsFavoriteTrue: {
		fontSize: 24,
		color: 'gold',
	},
	favIconIsFavoriteFalse: {
		fontSize: 24,
		color: '#d3d3d3',
	},
});

export default ListItem;

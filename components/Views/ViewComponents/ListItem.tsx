import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IListItem } from '../../Interfaces/IViewComponents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoriteIDsContext, DataItemContext } from '../../Helper/Context';
import { CmcCryptoCurrency } from '../../Interfaces/ICoinMarketCapModel';

const ListItem = ({ item, navigation }: IListItem) => {
	const { price } = item.quote.USD;
	const percent24h: number = item.quote.USD.percent_change_24h;

	const [favoriteValue, setFavorite] = useState<Number>(item.id);
	const { setDataItem } = useContext(DataItemContext);
	const { setFavIDs } = useContext(FavoriteIDsContext);

	const saveIDtoAsyncStorage = async (storageId: string): Promise<void> => {
		try {
			const jsonValue: string = JSON.stringify(favoriteValue);
			await AsyncStorage.setItem(storageId, jsonValue);
			fetchAllItemsFromAsyncStorage();
			console.log(storageId, 'added');
			console.log('All Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	const deleteIDFromAsyncStorage = async (storageId: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(storageId);
			fetchAllItemsFromAsyncStorage();
			console.log(storageId, 'deleted');
			console.log('Remaining Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	async function fetchAllItemsFromAsyncStorage(): Promise<void> {
		try {
			await AsyncStorage.getAllKeys().then(async keys => {
				if (keys.length !== 0) {
					await AsyncStorage.multiGet(keys).then(key => {
						const ids: number[] = [];
						key.forEach(data => {
							if (data[1] !== null) {
								ids.push(parseInt(data[1].toString(), 10));
							}
						});
						setFavIDs(ids);
					});
				} else if (keys.length === 0) {
					setFavIDs([]);
				}
			});
		} catch (error) {
			console.log(error);
		}
	}

	const btnPress = (): void => {
		try {
			const storageId: string = 'ID_' + item.id;
			if (!item.isFavorite) {
				setFavorite(item.id);
				saveIDtoAsyncStorage(storageId);
				item.isFavorite = true;
			} else if (item.isFavorite) {
				deleteIDFromAsyncStorage(storageId);
				item.isFavorite = false;
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchAllItemsFromAsyncStorage();
	}, []);

	if (item.id === 1975 /*Chainlink*/) {
		return <TouchableOpacity style={styles.listItemChainlink} onPress={() => {
			navigation.navigate('Crypto Details'); 
			setDataItem(item);
		}
	}>
			<View style={styles.listItemView} >
				<Text style={styles.listItemNameChainlink}>{item.name}</Text>
				<Text style={styles.listItemPriceChainlink}>{price < 1 ? `$${price.toPrecision(4)}` : `$${price.toFixed(2)}`}</Text>
				<Text style={(percent24h < 0) ? styles.listItemPercentNegativeChainlink: styles.listItemPercentPositiveChainlink}>{percent24h.toFixed(2)}%</Text>

				<Icon style={item.isFavorite ? styles.favIconIsFavoriteTrue : styles.favIconIsFavoriteFalse} name="star" onPress={() => btnPress()} ></Icon>
			</View>
		</TouchableOpacity>
	}
	else return (
		<TouchableOpacity style={styles.listItem} onPress={() => {
			navigation.navigate('Crypto Details'); 
			setDataItem(item);
		}
		}>
			<View style={styles.listItemView} >
				<Text style={styles.listItemName}>{item.name}</Text>
				<Text style={styles.listItemPrice}>
					{price < 1 ? `$${price.toPrecision(4)}` : `$${price.toFixed(2)}`}
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
		backgroundColor: '#375bd2', //Chainlink blue
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
		color: '#6e0511', //Red
	},
	listItemPercentPositiveChainlink: {
		width: 75,
		textAlign: 'right',
		color: '#8acc26', //Green
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

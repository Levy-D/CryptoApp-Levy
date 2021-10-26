import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IListItem from '../../Interfaces/IListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteIDsContext} from '../../Helper/Context';

const ListItem = ({item}: IListItem) => {
	const price : number = parseFloat(item.quote.USD.price);
	const percent24h : number = parseFloat(item.quote.USD.percent_change_24h);

	const [favoriteValue, setFavorite] = useState<Number>(item.id);
	const {setFavIDs} = useContext(FavoriteIDsContext);

	const saveValue = async (storageId: string): Promise<void> => {
		try {
			const jsonValue : string = JSON.stringify(favoriteValue);
			await AsyncStorage.setItem(storageId, jsonValue);
			fetchAllItems();
			console.log(storageId, 'added');
			console.log('All Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	const deleteValue = async (storageId: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(storageId);
			fetchAllItems();
			console.log(storageId, 'deleted');
			console.log('Remaining Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	async function fetchAllItems(): Promise<void> {
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

	const btnPress = ():void => {
		try {
			const storageId: string = 'ID_' + item.id;
			if (!item.isFavorite) {
				setFavorite(item.id);
				saveValue(storageId);
				item.isFavorite = true;
			} else if (item.isFavorite) {
				deleteValue(storageId);
				item.isFavorite = false;
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchAllItems();
	}, []);

	return (
		<TouchableOpacity style={styles.listItem} >
			<View style={styles.listItemView} >
				<Text style={styles.listItemName}>{item.name}</Text>
				<Text style={styles.listItemPrice}>{price < 1 ? `$${price.toPrecision(4)}` : `$${price.toFixed(2)}`}</Text>
				<Text style={(percent24h < 0) ? styles.listItemPercentNegative : styles.listItemPercentPositive}>{percent24h.toFixed(2)}%</Text>

				<Icon style={item.isFavorite ? styles.favIconIsFavoriteTrue : styles.favIconIsFavoriteFalse} name="star" onPress={() => btnPress()} ></Icon>
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

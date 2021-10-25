import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IListItem from '../Interfaces/IListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItem = ({item, onFavorite}: IListItem) => {
	const price : number = parseFloat(item.quote.USD.price);
	const percent24h : number = parseFloat(item.quote.USD.percent_change_24h);

	const [favoriteValue, setFavorite] = useState<Number>(item.id);

	const saveValue = async (storageId: string) => {
		try {
			const jsonValue : string = JSON.stringify(favoriteValue);
			await AsyncStorage.setItem(storageId, jsonValue);
			console.log(storageId, 'added');
			console.log('All Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	const deleteValue = async (storageId: string) => {
		try {
			await AsyncStorage.removeItem(storageId);
			console.log(storageId, 'deleted');
			console.log('Remaining Keys', await AsyncStorage.getAllKeys());
		} catch (e) {
			console.log(e);
		}
	};

	const btnPress = () => {
		try {
			const storageId: string = 'ID_' + item.id;
			if (!item.isFavorite) {
				setFavorite(item.id);
				saveValue(storageId);
				onFavorite();
				item.isFavorite = true;
			} else if (item.isFavorite) {
				deleteValue(storageId);
				onFavorite();
				item.isFavorite = false;
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (

		<View style={styles.listItemView} >
			<Text style={styles.listItemName}>{item.name}</Text>
			<Text style={styles.listItemPrice}>${price.toFixed(2)}</Text>
			<Text style={(percent24h < 0) ? styles.listItemPercentNegative : styles.listItemPercentPositive}>{percent24h.toFixed(2)}%</Text>
			<TouchableOpacity >
				<Icon style={item.isFavorite ? styles.favIconIsFavoriteTrue : styles.favIconIsFavoriteFalse} name="star" onPress={() => btnPress()} ></Icon>
			</TouchableOpacity>
		</View>

	);
};

const styles = StyleSheet.create({
	listItem: {
		justifyContent: 'center',
		height: 70,
		padding: 15,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	listItemView: {
		height: 70,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemName: {
		fontSize: 20,
		width: 130,
	},
	listItemPrice: {
		fontSize: 20,
		width: 100,
	},
	listItemPercentNegative: {
		fontSize: 20,
		width: 75,
		textAlign: 'right',
		color: 'red',
	},
	listItemPercentPositive: {
		fontSize: 20,
		width: 75,
		textAlign: 'right',
		color: 'green',
	},
	listItemFavorite: {
		fontSize: 20,
		width: 50,
	},
	favIconIsFavoriteTrue: {
		fontSize: 30,
		color: 'gold',
	},
	favIconIsFavoriteFalse: {
		fontSize: 30,
		color: '#d3d3d3',
	},
});

export default ListItem;

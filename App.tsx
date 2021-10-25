import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import apiCoinMarketCapTop from './components/API/APICoinMarketCap';
import Header from './components/Views/Header';
import SubHeader from './components/Views/SubHeader';
import ShowFlatList from './components/Views/ShowFlatList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';
import {CmcCryptoCurrency} from './components/Interfaces/ICoinMarketCapModel';

const App = () => {
	// Get data from API
	const data: CmcCryptoCurrency[] | undefined = apiCoinMarketCapTop(5);

	// Gives list of IDs in Async Storage
	const [favoriteIDs, setFavIDs] = useState<number[]>([]);
	async function fetchAllItems() {
		try {
			await AsyncStorage.getAllKeys().then(async keys => {
				if (keys.length !== 0) {
					await AsyncStorage.multiGet(keys).then(key => {
						const ids: number[] = [];
						key.forEach(data => {
							if (data[1]) {
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

	// Set isFavorite to True when corresponding ID is found in ID-list of fetchAllItems()
	let newData: CmcCryptoCurrency[] | null = [];
	if (data !== undefined) {
		newData = data.filter(item => favoriteIDs.includes(item.id));
		data.forEach(item => {
			if (favoriteIDs.includes(item.id)) {
				item.isFavorite = true;
			}
		});
	}

	console.log(favoriteIDs);

	// Set isFavorite to True on startup if coin is saved in AsyncStorage so it shows in the favorite list on startup
	useEffect(() => {
		fetchAllItems();
		console.log(data);
		if (data !== undefined) {
			data.forEach(item => {
				if (favoriteIDs.includes(item.id)) {
					item.isFavorite = true;
				}
			});
		}
	}, []);

	return (
		<View>
			<Header />
			<ScrollView style={styles.view}>
				<SubHeader title="Top 5 Crypto Currency" />
				<ShowFlatList data={data} onFavorite={fetchAllItems} />
				<SubHeader title="Favorites" />
				<ShowFlatList data={newData} onFavorite={fetchAllItems} />
			</ScrollView>
		</View>
	);
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	view: {
		height: screenHeight - 60, // Header height,
	},
});

export default App;

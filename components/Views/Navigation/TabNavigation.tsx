import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homePage from '../ViewPages/HomePage';
import favoritesPage from '../ViewPages/FavoritesPage';
import settingsPage from '../ViewPages/SettingsPage';
import Icon from 'react-native-vector-icons/FontAwesome';
// Import dataAPI from '../../API/MockAPIData';
import { CmcCryptoCurrency } from '../../Interfaces/ICoinMarketCapModel';
import { DataContext, FavoriteIDsContext, FavoritesContext, DataItemContext } from '../../Helper/Context';
import apiCoinMarketCapTop from '../../API/APICoinMarketCap';

export default function TabNavigation() {
	const Tab = createBottomTabNavigator();
	const dataAPI: CmcCryptoCurrency[] = apiCoinMarketCapTop(25);

	const [data, setData] = useState<CmcCryptoCurrency[]>([]);
	const [favoritesData, setFavoritesData] = useState<CmcCryptoCurrency[]>([]);
	const [favoriteIDs, setFavIDs] = useState<number[]>([]);
	const [dataItem, setDataItem] = useState<CmcCryptoCurrency>({});


	useEffect(() => {
		setData(dataAPI);
	}, [dataAPI]);

	// All favorites will have been marked as such on startup (yellow star)
	useEffect(() => {
		data.forEach(item => {
			if (favoriteIDs.includes(item.id)) {
				item.isFavorite = true;
			}
		});
		setData(data);
	}, [favoritesData]);

	// Show favorites in favorites
	useEffect(() => {
		setFavoritesData(data.filter(item => favoriteIDs.includes(item.id)));
	}, [favoriteIDs]);

	return (
		<DataContext.Provider value={{ data, setData }}>
			<FavoritesContext.Provider value={{ favoritesData, setFavoritesData }}>
				<FavoriteIDsContext.Provider value={{ favoriteIDs, setFavIDs }}>
					<DataItemContext.Provider value={{ dataItem, setDataItem }}>
						<Tab.Navigator
							screenOptions={{ headerShown: false }}>
							<Tab.Screen
								name="HomeTab"
								component={homePage}
								options={{
									tabBarIcon: ({ size, color }) => (
										<Icon name="home" size={size} color={color} />
									),
								}}
							/>
							<Tab.Screen
								name="FavoritesTab"
								component={favoritesPage}
								options={{
									tabBarIcon: ({ size, color }) => (
										<Icon name="star" size={size} color={color} />
									),
								}}
							/>
							<Tab.Screen
								name="SettingsTab"
								component={settingsPage}
								options={{
									tabBarIcon: ({ size, color }) => (
										<Icon name="gear" size={size} color={color} />
									),
								}}
							/>
						</Tab.Navigator>
					</DataItemContext.Provider>
				</FavoriteIDsContext.Provider>
			</FavoritesContext.Provider>
		</DataContext.Provider>
	);
}

import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homePage from '../ViewPages/HomePage';
import favoritesPage from '../ViewPages/FavoritesPage';
import settingsPage from '../ViewPages/SettingsPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import dataAPI from '../../API/MockAPIData';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';
import {DataContext, FavoriteIDsContext, FavoritesContext} from '../../Helper/Context';

export default function TabNavigation() {
	const Tab = createBottomTabNavigator();

	const [data, setData] = useState<CmcCryptoCurrency[]>(dataAPI);
	const [favoritesData, setFavoritesData] = useState<CmcCryptoCurrency[]>([]);
	const [favoriteIDs, setFavIDs] = useState<number[]>([]);

	// All favorites will have been marked as such on startup (yellow star)
	useEffect(() => {
		data.forEach(item => {
			if (favoriteIDs.includes(item.id)) {
				item.isFavorite = true;
			}
		});
		setData(data);
	});

	// Show favorites in favorites
	useEffect(() => {
		setFavoritesData(data.filter(item => favoriteIDs.includes(item.id)));
	}, [favoriteIDs]);

	return (
		<DataContext.Provider value={{data, setData}}>
			<FavoritesContext.Provider value={{favoritesData, setFavoritesData}}>
				<FavoriteIDsContext.Provider value={{favoriteIDs, setFavIDs}}>
					<Tab.Navigator>
						<Tab.Screen
							name="Home"
							component={homePage}
							options={{
								tabBarIcon: ({size, color}) => (
									<Icon name="home" size={size} color={color} />
								),
							}}
						/>
						<Tab.Screen
							name="Favorites"
							component={favoritesPage}
							options={{
								tabBarIcon: ({size, color}) => (
									<Icon name="star" size={size} color={color} />
								),
							}}
						/>
						<Tab.Screen
							name="Settings"
							component={settingsPage}
							options={{
								tabBarIcon: ({size, color}) => (
									<Icon name="gear" size={size} color={color} />
								),
							}}
						/>
					</Tab.Navigator>
				</FavoriteIDsContext.Provider>
			</FavoritesContext.Provider>
		</DataContext.Provider>
	);
}

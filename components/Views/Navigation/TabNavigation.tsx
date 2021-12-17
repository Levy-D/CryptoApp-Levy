/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../ViewPages/HomePage';
import FavoritesPage from '../ViewPages/FavoritesPage';
import SettingsPage from '../ViewPages/SettingsPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {selectStateDisplayEUR} from '../../Redux/Slices/UserSettings';
import {getDataFromCoinMarketCap, selectCryptoData, selectCryptoDataEUR, selectCryptoDataUSD, selectFavorites, setCryptoData, setFavoritesData} from '../../Redux/Slices/CryptoData';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';

const TabNavigation = () => {
	const Tab = createBottomTabNavigator();
	const dispatch = useDispatch();
	const cryptoData = useSelector(selectCryptoData);
	const stateDisplayEUR = useSelector(selectStateDisplayEUR);
	const eur = useSelector(selectCryptoDataEUR);
	const usd = useSelector(selectCryptoDataUSD);
	const setFavorites = () => {
		dispatch(setFavoritesData(cryptoData.filter(x => x.isFavorite === true)));
	};

	const favs = useSelector(selectFavorites);

	const fetchDataFromCoinMarketCap = (favorites: CmcCryptoCurrency[]) => {
		const amount: number = 25;
		const valuta = stateDisplayEUR ? 'EUR' : 'USD';
		dispatch(getDataFromCoinMarketCap({amount, valuta, favorites}));
	};

	const switchValuta = () => {
		if (stateDisplayEUR) {
			dispatch(setCryptoData(eur));
		} else {
			dispatch(setCryptoData(usd));
		}
	};

	useEffect(() => fetchDataFromCoinMarketCap(favs), [stateDisplayEUR]);
	useEffect(switchValuta, [stateDisplayEUR, eur, usd]);
	useEffect(setFavorites, [cryptoData]);

	return (
		<Tab.Navigator screenOptions={{headerShown: false}}>
			<Tab.Screen
				name="Home"
				component={HomePage}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={FavoritesPage}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="star" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsPage}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="gear" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;

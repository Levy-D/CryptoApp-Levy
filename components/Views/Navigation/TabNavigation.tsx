import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../ViewPages/HomePage';
import FavoritesPage from '../ViewPages/FavoritesPage';
import SettingsPage from '../ViewPages/SettingsPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';
import apiCoinMarketCapTop from '../../API/APICoinMarketCap';
import {useDispatch, useSelector} from 'react-redux';
import {selectStateDisplayEUR} from '../../Redux/Slices/UserSettings';
import {selectCryptoData, selectCryptoDataEUR, selectCryptoDataUSD, setCryptoData, setCryptoDataEUR, setCryptoDataUSD} from '../../Redux/Slices/CryptoData';
import {selectFavoritesData, setFavoritesData} from '../../Redux/Slices/Favorites';

export default function TabNavigation() {
	const Tab = createBottomTabNavigator();
	const dispatch = useDispatch();
	const stateDisplayEUR = useSelector(selectStateDisplayEUR);
	const data = useSelector(selectCryptoData);
	const favorites = useSelector(selectFavoritesData);
	const eur = useSelector(selectCryptoDataEUR);
	const usd = useSelector(selectCryptoDataUSD);

	// Get API data
	useEffect(() => {
		const getData = async (amount: number, valuta: string) => {
			const dataAPI: CmcCryptoCurrency[] = await apiCoinMarketCapTop(amount, valuta);
			dataAPI.forEach(item => {
				if (favorites.length > 0) {
					favorites.forEach(favorite => {
						if (item.id === favorite.id) {
							item.isFavorite = true;
						} else {
							item.isFavorite = false;
						}
					});
				}

				if (valuta === 'USD') {
					dispatch(setCryptoDataUSD(dataAPI));
				} else {
					dispatch(setCryptoDataEUR(dataAPI));
				}
			});
		};

		const amountOfFetchedCryptos = 25;
		getData(amountOfFetchedCryptos, 'USD');
		getData(amountOfFetchedCryptos, 'EUR');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (stateDisplayEUR) {
			dispatch(setCryptoData(eur));
		} else {
			dispatch(setCryptoData(usd));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stateDisplayEUR]);

	// Show favorites in favorites
	useEffect(() => {
		if (data !== undefined) {
			dispatch(setFavoritesData(data.filter(item => item.isFavorite === true)));
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

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
}

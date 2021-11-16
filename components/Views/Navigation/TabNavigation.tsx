
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homePage from '../ViewPages/HomePage';
import favoritesPage from '../ViewPages/FavoritesPage';
import settingsPage from '../ViewPages/SettingsPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';
import {
	DataContext,
	FavoriteIDsContext,
	FavoritesContext,
	DataItemContext,
	IsEnabledHighlightChainlinkContext,
	IsEnabledUseEURContext,
} from '../../Helper/Context';
import apiCoinMarketCapTop from '../../API/APICoinMarketCap';
import {getItemFromAsyncStorage} from '../../Helper/AsyncStorage';

export default function TabNavigation() {
	const Tab = createBottomTabNavigator();
	const [data, setData] = useState<CmcCryptoCurrency[]>([]);
	const [favoritesData, setFavoritesData] = useState<CmcCryptoCurrency[]>([]);
	const [favoriteIDs, setFavIDs] = useState<number[]>([]);
	const [dataItem, setDataItem] = useState<CmcCryptoCurrency | null>(null);
	const [isEnabledHighlightChainlink, setIsEnabledHighlightChainlink]
		= useState<boolean>(false);
	const [isEnabledUseEUR, setIsEnabledUseEUR] = useState<boolean>();

	useEffect(() => {
		// Gets boolean from async storage to determine is an option ist true or false
		const getValueFromValutaEUR = async () => {
			const valueString: string = await getItemFromAsyncStorage('ValutaEUR').then();
			if (valueString !== undefined) {
				const valueBoolean: boolean = JSON.parse(valueString);
				setIsEnabledUseEUR(valueBoolean);
			}
		};

		// Gets boolean from async storage to determine if chainlink is highlighted
		const getValueFromChainlinkHighlighted = async () => {
			const valueString: string = await getItemFromAsyncStorage('ChainlinkHighlighted').then();
			if (valueString !== undefined) {
				const valueBoolean: boolean = JSON.parse(valueString);
				setIsEnabledHighlightChainlink(valueBoolean);
			}
		};

		getValueFromValutaEUR();
		getValueFromChainlinkHighlighted();
	}, []);

	// Get API data
	useEffect(() => {
		const getData = async (valuta: string) => {
			const dataAPI: CmcCryptoCurrency[] = await apiCoinMarketCapTop(25, valuta);
			setData(dataAPI);
		};

		getData((isEnabledUseEUR ? 'EUR' : 'USD'));
	}, [isEnabledUseEUR]);

	// All favorites will have been marked as such on startup with a yellow star
	useEffect(() => {
		data.forEach(item => {
			if (favoriteIDs.includes(item.id)) {
				item.isFavorite = true;
			}
		});
		setData(data);
	}, [favoritesData, data]);

	// Show favorites in favorites
	useEffect(() => {
		setFavoritesData(data.filter(item => favoriteIDs.includes(item.id)));
	}, [favoriteIDs, data]);

	return (
		<DataContext.Provider value={{data, setData}}>
			<FavoritesContext.Provider value={{favoritesData, setFavoritesData}}>
				<FavoriteIDsContext.Provider value={{favoriteIDs, setFavIDs}}>
					<DataItemContext.Provider value={{dataItem, setDataItem}}>
						<IsEnabledHighlightChainlinkContext.Provider
							value={{
								isEnabledHighlightChainlink,
								setIsEnabledHighlightChainlink,
							}}>
							<IsEnabledUseEURContext.Provider
								value={{isEnabledUseEUR, setIsEnabledUseEUR}}>
								<Tab.Navigator screenOptions={{headerShown: false}}>
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
							</IsEnabledUseEURContext.Provider>
						</IsEnabledHighlightChainlinkContext.Provider>
					</DataItemContext.Provider>
				</FavoriteIDsContext.Provider>
			</FavoritesContext.Provider>
		</DataContext.Provider>
	);
}

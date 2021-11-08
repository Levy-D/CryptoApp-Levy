import React from 'react';
import ShowFlatListFavorites from '../ViewComponents/ShowFlatListFavorites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import cryptoCurrencyPage from './CryptoCurrencyPage';

const favoritesPage = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Overview Favorites" component={ShowFlatListFavorites}/>
			<Stack.Screen name="Crypto Details" component={cryptoCurrencyPage} />
		</Stack.Navigator>
	);
};

export default favoritesPage;

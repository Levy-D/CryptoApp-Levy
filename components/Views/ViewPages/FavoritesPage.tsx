import React from 'react';
import ShowFlatListFavorites from '../ViewComponents/ShowFlatListFavorites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import cryptoCurrencyPage from './CryptoCurrencyPage';
import LogoTitle from '../ViewComponents/LogoTitle';
import {RootStackParamList} from '../../Helper/NavigationTypeCheck';

const favoritesPage = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Overview Favorites" component={ShowFlatListFavorites}/>
			<Stack.Screen name="Crypto Details" component={cryptoCurrencyPage} options={{headerTitle: () => <LogoTitle/>}}/>
		</Stack.Navigator>
	);
};

export default favoritesPage;

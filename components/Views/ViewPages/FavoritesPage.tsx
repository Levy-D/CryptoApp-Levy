import React from 'react';
import ShowFlatListFavorites from '../ViewComponents/ShowFlatListFavorites';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptoCurrencyPage from './CryptoCurrencyPage';
import LogoTitle from '../ViewComponents/LogoTitle';
import {RootStackParamList} from '../../Helper/NavigationTypeCheck';

const FavoritesPage = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Overview Favorites"
				component={ShowFlatListFavorites}
			/>
			<Stack.Screen
				name="Crypto Details"
				component={CryptoCurrencyPage}
				options={{headerTitle: () => <LogoTitle />}}
			/>
		</Stack.Navigator>
	);
};

export default FavoritesPage;

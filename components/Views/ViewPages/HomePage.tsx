import React from 'react';
import ShowFlatListCryptos from '../ViewComponents/ShowFlatListCryptos';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import cryptoCurrencyPage from './CryptoCurrencyPage';

const homePage = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Overview" component={ShowFlatListCryptos}/>
			<Stack.Screen name="Crypto Details" component={cryptoCurrencyPage} />
		</Stack.Navigator>
	);
};

export default homePage;

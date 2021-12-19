import React from 'react';
import ShowFlatListCryptos from '../ViewComponents/ShowFlatListCryptos';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import cryptoCurrencyPage from './CryptoCurrencyPage';
import LogoTitle from '../ViewComponents/LogoTitle';
import {RootStackParamList} from '../../Helper/NavigationTypeCheck';

const HomePage = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Overview" component={ShowFlatListCryptos} />
			<Stack.Screen
				name="Crypto Details"
				component={cryptoCurrencyPage}
				options={{headerTitle: () => <LogoTitle />}}
			/>
		</Stack.Navigator>
	);
};

export default HomePage;

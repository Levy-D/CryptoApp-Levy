import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './components/Views/Navigation/TabNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './components/Redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
	useEffect(() => {
		const init = async () => {};

		init().finally(async () => {
			await RNBootSplash.hide({fade: true});
			console.log('Bootsplash has been hidden successfully');
		});
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<TabNavigation />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;

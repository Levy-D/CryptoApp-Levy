import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './components/Views/Navigation/TabNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './components/Redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
	useEffect(() => {
		setTimeout(() => {
			// Timeout
		}, 5000);
		SplashScreen.hide();
	}, []);

	return (
		<Provider store={store} >
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<TabNavigation />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './components/Views/Navigation/TabNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './components/Redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => (
	<Provider store={store} >
		<PersistGate loading={null} persistor={persistor} />
		<NavigationContainer>
			<TabNavigation />
		</NavigationContainer>
	</Provider>
);

export default App;

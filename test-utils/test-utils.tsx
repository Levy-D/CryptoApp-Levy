import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
// Import your own reducer
import userSettingsReducer from '../components/Redux/Slices/UserSettings';
import cryptoDataReducer from '../components/Redux/Slices/CryptoData';

const reducers = combineReducers({
	userSettings: userSettingsReducer,
	cryptoData: cryptoDataReducer,
});

function render(
	ui: any,
	{
		preloadedState,
		store = configureStore({reducer: reducers, preloadedState}),
		...renderOptions
	}: any = {},
) {
	function Wrapper({children}: any) {
		return <Provider store={store}>{children}</Provider>;
	}

	return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

// Re-export everything
export * from '@testing-library/react-native';
// Override render method
export {render};

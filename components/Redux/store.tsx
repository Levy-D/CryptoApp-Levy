import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSettingsReducer from './Slices/UserSettings';
import cryptoDataReducer from './Slices/CryptoData';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
	userSettings: userSettingsReducer,
	cryptoData: cryptoDataReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export function getStore(callback) {
	return AsyncStorage.getAllKeys((error, keys) => AsyncStorage.multiGet(keys, (err, stores) => {
		try {
			const str = stores[0];
			const parsedStore = JSON.parse(JSON.parse(str[1]).cryptoData); // HandleUser is my reducer

			callback(parsedStore);
		} catch (e) {
			console.log(e);
		}
	}));
}

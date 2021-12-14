import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userSettingsReducer from './Slices/UserSettings';
import favoritesReducer from './Slices/Favorites';
import cryptoDataReducer from './Slices/CryptoData';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
	userSettings: userSettingsReducer,
	favorites: favoritesReducer,
	cryptoData: cryptoDataReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;


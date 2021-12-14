
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';

interface FavoritesState {
	favoritesData: CmcCryptoCurrency[],
	favIDs: number[],
}

const initialState: FavoritesState = {
	favoritesData: [],
	favIDs: [],
};

const Favorites = createSlice({
	name: 'Favorites',
	initialState,
	reducers: {
		setFavoritesData: (state, action: PayloadAction<CmcCryptoCurrency[]>) => {
			state.favoritesData = action.payload;
		},
		setFavIDs: (state, action: PayloadAction<number[]>) => {
			state.favIDs = action.payload;
		},
		addFavID: (state, action: PayloadAction<number>) => {
			state.favIDs.push(action.payload);
		},
		deleteFavID: (state, action: PayloadAction<number>) => {
			state.favIDs = state.favIDs.filter(x => x !== action.payload);
		},
	},
});

export const {setFavoritesData, addFavID, deleteFavID, setFavIDs} = Favorites.actions;
export const selectFavoritesData = (state: RootState) => state.favorites.favoritesData;
export const selectfavIDs = (state: RootState) => state.favorites.favIDs;
export default Favorites.reducer;

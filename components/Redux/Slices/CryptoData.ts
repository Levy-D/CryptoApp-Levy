/* eslint-disable camelcase */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import apiCoinMarketCapTop from '../../API/APICoinMarketCap';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';
import {RootState} from '../store';

interface CryptoDataState{
	cryptoData: CmcCryptoCurrency[],
	cryptoDataEUR: CmcCryptoCurrency[],
	cryptoDataUSD: CmcCryptoCurrency[],
	favoritesData: CmcCryptoCurrency[],
	cryptoDataItem: CmcCryptoCurrency
}

const initialState: CryptoDataState = {
	cryptoData: [],
	cryptoDataUSD: [],
	cryptoDataEUR: [],
	favoritesData: [],
	cryptoDataItem: {
		id: 0,
		name: '',
		symbol: '',
		slug: '',
		num_market_pairs: 0,
		date_added: '',
		tags: [],
		max_supply: 0,
		circulating_supply: 0,
		total_supply: 0,
		platform: null,
		cmc_rank: 0,
		last_updated: '',
		quote: {
			USD: {
				price: 0,
				volume_24h: 0,
				volume_change_24h: 0,
				percent_change_1h: 0,
				percent_change_24h: 0,
				percent_change_7d: 0,
				percent_change_30d: 0,
				percent_change_60d: 0,
				percent_change_90d: 0,
				market_cap: 0,
				market_cap_dominance: 0,
				fully_diluted_market_cap: 0,
				last_updated: '',
			},
			EUR: {
				price: 0,
				volume_24h: 0,
				volume_change_24h: 0,
				percent_change_1h: 0,
				percent_change_24h: 0,
				percent_change_7d: 0,
				percent_change_30d: 0,
				percent_change_60d: 0,
				percent_change_90d: 0,
				market_cap: 0,
				market_cap_dominance: 0,
				fully_diluted_market_cap: 0,
				last_updated: '',
			},
		},
	},
};

const cryptoData = createSlice({
	name: 'cryptoData',
	initialState,
	reducers: {
		setCryptoData: (state, action: PayloadAction<CmcCryptoCurrency[]>) => {
			state.cryptoData = action.payload;
		},
		setCryptoDataUSD: (state, action: PayloadAction<CmcCryptoCurrency[]>) => {
			state.cryptoDataUSD = action.payload;
		},
		setCryptoDataEUR: (state, action: PayloadAction<CmcCryptoCurrency[]>) => {
			state.cryptoDataEUR = action.payload;
		},
		setFavoritesData: (state, action: PayloadAction<CmcCryptoCurrency[]>) => {
			state.favoritesData = action.payload;
		},
		setCryptoDataItem: (state, action: PayloadAction<CmcCryptoCurrency>) => {
			state.cryptoDataItem = action.payload;
		},
		setIsFavoriteToTrue: (state, action: PayloadAction<CmcCryptoCurrency>) => {
			const {id} = action.payload;
			state.cryptoData.forEach(x => {
				if (x.id === id) {
					x.isFavorite = true;
				}
			});
		},
		setIsFavoriteToFalse: (state, action: PayloadAction<CmcCryptoCurrency>) => {
			const {id} = action.payload;
			state.cryptoData.forEach(x => {
				if (x.id === id) {
					x.isFavorite = false;
				}
			});
		},
	},
	extraReducers: builder => {
		builder.addCase(getDataFromCoinMarketCap.fulfilled, (state, action: PayloadAction<[CmcCryptoCurrency[], string]>) => {
			if (action.payload[1] === 'USD') {
				state.cryptoDataUSD = action.payload[0];
			} else {
				state.cryptoDataEUR = action.payload[0];
			}
		});
	},
});

export const getDataFromCoinMarketCap = createAsyncThunk<[CmcCryptoCurrency[], string], {amount: number, valuta: string, favorites: CmcCryptoCurrency[]}>(
	'coinMarketCap/fetchTopCryptoCurrenciesStatus',
	async params => {
		const cryptoCurrencies: CmcCryptoCurrency[] = await apiCoinMarketCapTop(params.amount, params.valuta, params.favorites);
		return [cryptoCurrencies, params.valuta];
	},
);

export const {setCryptoData, setCryptoDataUSD, setCryptoDataEUR, setCryptoDataItem, setIsFavoriteToTrue, setIsFavoriteToFalse, setFavoritesData} = cryptoData.actions;
export const selectCryptoData = (state: RootState) => state.cryptoData.cryptoData;
export const selectCryptoDataUSD = (state: RootState) => state.cryptoData.cryptoDataUSD;
export const selectCryptoDataEUR = (state: RootState) => state.cryptoData.cryptoDataEUR;
export const selectCryptoDataItem = (state: RootState) => state.cryptoData.cryptoDataItem;
export const selectFavorites = (state: RootState) => state.cryptoData.favoritesData;
export default cryptoData.reducer;


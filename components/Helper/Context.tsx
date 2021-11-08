import React, {createContext} from 'react';
import {CmcCryptoCurrency, Platform, Quote} from '../Interfaces/ICoinMarketCapModel';

export const DataContext = createContext<{data: CmcCryptoCurrency[], setData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>}>({
	data: [],
	setData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => (value),
});

export const DataItemContext = createContext<{dataItem: CmcCryptoCurrency, setDataItem: React.Dispatch<React.SetStateAction<CmcCryptoCurrency>>}>({
dataItem: {
	id: 0,
	name: 'Test',
	symbol: '',
    slug: '',
    num_market_pairs: 0,
    date_added: '',
    tags: [],
    max_supply: undefined,
    circulating_supply: 0,
    total_supply: 0,
    platform: undefined,
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
		}
	},
    isFavorite: false,
},
	setDataItem: (value: React.SetStateAction<CmcCryptoCurrency>) => (value),
});

export const FavoritesContext = createContext<{favoritesData: CmcCryptoCurrency[], setFavoritesData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>}>({
	favoritesData: [],
	setFavoritesData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => (value),
});

export const FavoriteIDsContext = createContext<{favoriteIDs: number[], setFavIDs: React.Dispatch<React.SetStateAction<number[]>>}>({
	favoriteIDs: [],
	setFavIDs: (value: React.SetStateAction<number[]>) => (value),
});


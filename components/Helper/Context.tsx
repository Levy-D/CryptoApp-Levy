import React, {createContext} from 'react';
import {CmcCryptoCurrency} from '../Interfaces/ICoinMarketCapModel';

export const DataContext = createContext<{data: CmcCryptoCurrency[], setData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>}>({
	data: [],
	setData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => (value),
});

export const FavoritesContext = createContext<{favoritesData: CmcCryptoCurrency[], setFavoritesData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>}>({
	favoritesData: [],
	setFavoritesData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => (value),
});

export const FavoriteIDsContext = createContext<{favoriteIDs: number[], setFavIDs: React.Dispatch<React.SetStateAction<number[]>>}>({
	favoriteIDs: [],
	setFavIDs: (value: React.SetStateAction<number[]>) => (value),
});


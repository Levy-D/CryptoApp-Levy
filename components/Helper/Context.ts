
import React, {createContext} from 'react';
import {CmcCryptoCurrency} from '../Interfaces/ICoinMarketCapModel';

export const DataContext = createContext<{
	data: CmcCryptoCurrency[];
	setData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>;
}>({
	data: [],
	setData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => value,
});

export const DataItemContext = createContext<{
	dataItem: CmcCryptoCurrency |null;
	setDataItem: React.Dispatch<React.SetStateAction<CmcCryptoCurrency | null>>;
}>({
	dataItem: null,
	setDataItem: (value: React.SetStateAction<CmcCryptoCurrency | null>) => value,
});

export const FavoritesContext = createContext<{
	favoritesData: CmcCryptoCurrency[];
	setFavoritesData: React.Dispatch<React.SetStateAction<CmcCryptoCurrency[]>>;
}>({
	favoritesData: [],
	setFavoritesData: (value: React.SetStateAction<CmcCryptoCurrency[]>) => value,
});

export const FavoriteIDsContext = createContext<{
	favoriteIDs: number[];
	setFavIDs: React.Dispatch<React.SetStateAction<number[]>>;
}>({
	favoriteIDs: [],
	setFavIDs: (value: React.SetStateAction<number[]>) => value,
});

export const IsEnabledHighlightChainlinkContext = createContext<{
	isEnabledHighlightChainlink: boolean;
	setIsEnabledHighlightChainlink: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isEnabledHighlightChainlink: false,
	setIsEnabledHighlightChainlink: (value: React.SetStateAction<boolean>) =>
		value,
});

export const IsEnabledUseEURContext = createContext<{
	isEnabledUseEUR: boolean;
	setIsEnabledUseEUR: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isEnabledUseEUR: false,
	setIsEnabledUseEUR: (value: React.SetStateAction<boolean>) => value,
});

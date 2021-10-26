import {CmcCryptoCurrency} from './ICoinMarketCapModel';

export interface IHeader {
    title: string
}

export interface IListItem {
    item: CmcCryptoCurrency
    navigation:
}

export interface IFlatList {
    data: CmcCryptoCurrency[],
    navigation:
}

import {CmcCryptoCurrency} from './ICoinMarketCapModel';

export interface IHeader {
    title: string
}

export interface IListItem {
    item: CmcCryptoCurrency
}

export interface IFlatList {
    data: CmcCryptoCurrency[]
}

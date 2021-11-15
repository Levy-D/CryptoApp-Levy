import {CmcCryptoCurrency} from './ICoinMarketCapModel';
import {CryptoDetailsScreenNavigationProp} from '../Helper/NavigationTypeCheck';

export interface IHeader {
    title: string
}

export interface IListItem {
    item: CmcCryptoCurrency
    navigation: CryptoDetailsScreenNavigationProp
}

export interface IFlatList {
    data: CmcCryptoCurrency[],
    navigation: CryptoDetailsScreenNavigationProp
}


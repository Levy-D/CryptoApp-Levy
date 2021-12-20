import axios, {AxiosInstance, AxiosResponse} from 'axios';
import CMCResponse, {
	CmcCryptoCurrency,
} from '../Interfaces/ICoinMarketCapModel';

export const addIsFavoriteProperty = (
	favorites: CmcCryptoCurrency[],
	cryptoCurrencies: CmcCryptoCurrency[],
) => {
	cryptoCurrencies.forEach(crypto => {
		crypto.isFavorite = false;
		if (favorites.length > 0) {
			favorites.forEach(favorite => {
				if (crypto.id === favorite.id) {
					crypto.isFavorite = true;
				}
			});
		}
	});
	return cryptoCurrencies;
};

const ApiCoinMarketCapTop = async (
	n: number,
	valuta: string,
	favorites: CmcCryptoCurrency[],
) => {
	const client: AxiosInstance = axios.create({
		baseURL: 'https://pro-api.coinmarketcap.com',
		headers: {'X-CMC_PRO_API_KEY': 'cd836a4e-36d8-4404-8857-7ded29edda69'},
	});

	return client
		.get<CMCResponse>(
			`/v1/cryptocurrency/listings/latest?limit=${n}&convert=${valuta}`,
		)
		.then((response: AxiosResponse<CMCResponse>) => {
			let cryptoCurrencies = response.data.data;
			cryptoCurrencies = addIsFavoriteProperty(favorites, cryptoCurrencies);
			console.log('API data', valuta, cryptoCurrencies);
			return cryptoCurrencies;
		})
		.catch((error): any => {
			console.log('API CoinMarketCap', error);
			return [];
		});
};

export default ApiCoinMarketCapTop;

import axios, {AxiosInstance, AxiosResponse} from 'axios';
import CMCResponse from '../Interfaces/ICoinMarketCapModel';

const ApiCoinMarketCapTop = (n: number, valuta: string) => {
	const client: AxiosInstance = axios.create({
		baseURL: 'https://pro-api.coinmarketcap.com',
		headers: {'X-CMC_PRO_API_KEY': 'cd836a4e-36d8-4404-8857-7ded29edda69'},
	});

	return client
		.get<CMCResponse>(`/v1/cryptocurrency/listings/latest?limit=${n}&convert=${valuta}`)
		.then((response: AxiosResponse<CMCResponse>) => {
			const cryptoCurrencies = response.data.data;
			console.log('API data', valuta, cryptoCurrencies);
			return cryptoCurrencies;
		})
		.catch((error): any => {
			console.log('API CoinMarketCap', error);
		});
};

export default ApiCoinMarketCapTop;

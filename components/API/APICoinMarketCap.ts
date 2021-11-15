import axios, {AxiosInstance, AxiosResponse} from 'axios';
import CMCResponse from '../Interfaces/ICoinMarketCapModel';

const apiCoinMarketCapTop = (n: number, valuta: string) => {
	const client: AxiosInstance = axios.create({
		baseURL: 'https://pro-api.coinmarketcap.com',
		headers: {'X-CMC_PRO_API_KEY': 'cd836a4e-36d8-4404-8857-7ded29edda69'},
	});

	return client
		.get<CMCResponse>(`/v1/cryptocurrency/listings/latest?limit=${n}&convert=${valuta}`)
		.then((response: AxiosResponse<CMCResponse>) => {
			console.log('API data', response.data.data);
			return response.data.data;
		})
		.catch((error): any => {
			console.log(error);
		});
};

export default apiCoinMarketCapTop;

/* eslint-disable camelcase */
import apiCoinMarketCapTop, {addIsFavoriteProperty} from '../APICoinMarketCap';
import mockAxios from 'axios';

const apiData = [
	{
		id: 1,
		name: 'Bitcoin',
		symbol: 'BTC',
		slug: 'bitcoin',
		num_market_pairs: 8195,
		date_added: '2013-04-28T00:00:00.000Z',
		tags: [
			'mineable',
			'pow',
			'sha-256',
			'store-of-value',
			'state-channel',
			'coinbase-ventures-portfolio',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'binance-labs-portfolio',
			'blockchain-capital-portfolio',
			'boostvc-portfolio',
			'cms-holdings-portfolio',
			'dcg-portfolio',
			'dragonfly-capital-portfolio',
			'electric-capital-portfolio',
			'fabric-ventures-portfolio',
			'framework-ventures-portfolio',
			'galaxy-digital-portfolio',
			'huobi-capital-portfolio',
			'alameda-research-portfolio',
			'a16z-portfolio',
			'1confirmation-portfolio',
			'winklevoss-capital-portfolio',
			'usv-portfolio',
			'placeholder-ventures-portfolio',
			'pantera-capital-portfolio',
			'multicoin-capital-portfolio',
			'paradigm-portfolio',
		],
		max_supply: 21000000,
		circulating_supply: 18905700,
		total_supply: 18905700,
		platform: null,
		cmc_rank: 1,
		last_updated: '2021-12-20T09:19:02.000Z',
		quote: {
			EUR: {
				price: 40904.02895142914,
				volume_24h: 25602321215.04118,
				volume_change_24h: 14.4722,
				percent_change_1h: -1.23155601,
				percent_change_24h: -3.13665617,
				percent_change_7d: -7.28301769,
				percent_change_30d: -21.37551877,
				percent_change_60d: -30.57768678,
				percent_change_90d: 6.62824502,
				market_cap: 773319300147.0339,
				market_cap_dominance: 40.6842,
				fully_diluted_market_cap: 858984607980.009,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
	{
		id: 1027,
		name: 'Ethereum',
		symbol: 'ETH',
		slug: 'ethereum',
		num_market_pairs: 4552,
		date_added: '2015-08-07T00:00:00.000Z',
		tags: [
			'mineable',
			'pow',
			'smart-contracts',
			'ethereum-ecosystem',
			'binance-smart-chain',
			'coinbase-ventures-portfolio',
			'three-arrows-capital-portfolio',
			'polychain-capital-portfolio',
			'binance-labs-portfolio',
			'blockchain-capital-portfolio',
			'boostvc-portfolio',
			'cms-holdings-portfolio',
			'dcg-portfolio',
			'dragonfly-capital-portfolio',
			'electric-capital-portfolio',
			'fabric-ventures-portfolio',
			'framework-ventures-portfolio',
			'hashkey-capital-portfolio',
			'kenetic-capital-portfolio',
			'huobi-capital-portfolio',
			'alameda-research-portfolio',
			'a16z-portfolio',
			'1confirmation-portfolio',
			'winklevoss-capital-portfolio',
			'usv-portfolio',
			'placeholder-ventures-portfolio',
			'pantera-capital-portfolio',
			'multicoin-capital-portfolio',
			'paradigm-portfolio',
		],
		max_supply: null,
		circulating_supply: 118814237.874,
		total_supply: 118814237.874,
		platform: null,
		cmc_rank: 2,
		last_updated: '2021-12-20T09:19:02.000Z',
		quote: {
			EUR: {
				price: 3363.6684971660197,
				volume_24h: 16292593487.75791,
				volume_change_24h: 10.9372,
				percent_change_1h: -1.41712538,
				percent_change_24h: -4.83884253,
				percent_change_7d: -6.80085363,
				percent_change_30d: -11.92748366,
				percent_change_60d: -10.19017974,
				percent_change_90d: 23.66256452,
				market_cap: 399651708951.5636,
				market_cap_dominance: 21.0391,
				fully_diluted_market_cap: 399651708951.56635,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
	{
		id: 1839,
		name: 'Binance Coin',
		symbol: 'BNB',
		slug: 'binance-coin',
		num_market_pairs: 556,
		date_added: '2017-07-25T00:00:00.000Z',
		tags: [
			'marketplace',
			'centralized-exchange',
			'payments',
			'smart-contracts',
			'binance-smart-chain',
			'alameda-research-portfolio',
			'multicoin-capital-portfolio',
		],
		max_supply: 166801148,
		circulating_supply: 166801148,
		total_supply: 166801148,
		platform: null,
		cmc_rank: 3,
		last_updated: '2021-12-20T09:18:18.000Z',
		quote: {
			EUR: {
				price: 456.45668203942324,
				volume_24h: 1105070168.9959726,
				volume_change_24h: 0.7563,
				percent_change_1h: -1.81632364,
				percent_change_24h: -5.18180266,
				percent_change_7d: -7.98391988,
				percent_change_30d: -11.99235665,
				percent_change_60d: 3.33601668,
				percent_change_90d: 38.42891033,
				market_cap: 76137498576.44678,
				market_cap_dominance: 4.004,
				fully_diluted_market_cap: 76137498576.44707,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
	{
		id: 825,
		name: 'Tether',
		symbol: 'USDT',
		slug: 'tether',
		num_market_pairs: 20435,
		date_added: '2015-02-25T00:00:00.000Z',
		tags: [
			'payments',
			'stablecoin',
			'asset-backed-stablecoin',
			'binance-smart-chain',
			'avalanche-ecosystem',
			'solana-ecosystem',
		],
		max_supply: null,
		circulating_supply: 76289909011.55621,
		total_supply: 80361995260.61412,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		},
		cmc_rank: 4,
		last_updated: '2021-12-20T09:18:21.000Z',
		quote: {
			EUR: {
				price: 0.8888497667166252,
				volume_24h: 50833011347.91566,
				volume_change_24h: 11.0338,
				percent_change_1h: -0.19951632,
				percent_change_24h: -0.60368418,
				percent_change_7d: -1.58366594,
				percent_change_30d: 0.01136278,
				percent_change_60d: 0.08762284,
				percent_change_90d: 0.07746762,
				market_cap: 67810267827.754295,
				market_cap_dominance: 3.5651,
				fully_diluted_market_cap: 71429740740.28362,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
	{
		id: 5426,
		name: 'Solana',
		symbol: 'SOL',
		slug: 'solana',
		num_market_pairs: 198,
		date_added: '2020-04-10T00:00:00.000Z',
		tags: [
			'pos',
			'platform',
			'solana-ecosystem',
			'cms-holdings-portfolio',
			'kenetic-capital-portfolio',
			'alameda-research-portfolio',
			'multicoin-capital-portfolio',
			'k300-ventures-portfolio',
		],
		max_supply: null,
		circulating_supply: 308113471.9014816,
		total_supply: 511618035.1733222,
		platform: null,
		cmc_rank: 5,
		last_updated: '2021-12-20T09:19:05.000Z',
		quote: {
			EUR: {
				price: 154.35155067683223,
				volume_24h: 1482684191.109087,
				volume_change_24h: 1.5191,
				percent_change_1h: -1.42115932,
				percent_change_24h: -6.86431274,
				percent_change_7d: 3.62189654,
				percent_change_30d: -19.46033111,
				percent_change_60d: -9.24488839,
				percent_change_90d: 21.94774446,
				market_cap: 47557792172.41627,
				market_cap_dominance: 2.5003,
				fully_diluted_market_cap: 78969037083.2325,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
	{
		id: 3408,
		name: 'USD Coin',
		symbol: 'USDC',
		slug: 'usd-coin',
		num_market_pairs: 1779,
		date_added: '2018-10-08T00:00:00.000Z',
		tags: [
			'medium-of-exchange',
			'stablecoin',
			'asset-backed-stablecoin',
			'binance-smart-chain',
			'fantom-ecosystem',
		],
		max_supply: null,
		circulating_supply: 42061265507.42682,
		total_supply: 42061265507.42682,
		platform: {
			id: 1027,
			name: 'Ethereum',
			symbol: 'ETH',
			slug: 'ethereum',
			token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		cmc_rank: 6,
		last_updated: '2021-12-20T09:19:06.000Z',
		quote: {
			EUR: {
				price: 0.8886888185804088,
				volume_24h: 3235313297.7267747,
				volume_change_24h: 7.8027,
				percent_change_1h: -0.22259133,
				percent_change_24h: -0.67217685,
				percent_change_7d: -1.56207294,
				percent_change_30d: 0.07542054,
				percent_change_60d: 0.0897918,
				percent_change_90d: 0.0380073,
				market_cap: 37379376351.79204,
				market_cap_dominance: 1.9652,
				fully_diluted_market_cap: 37379376351.7917,
				last_updated: '2021-12-20T09:20:09.000Z',
			},
		},
	},
];

describe('addIsFavoriteProperty', () => {
	it('should add isFavorite property to the incoming API call', () => {
		// Arrange
		const favorites = [];

		// Act
		const updatedApiData = addIsFavoriteProperty(favorites, apiData);

		// Assert
		expect(updatedApiData[0]).toHaveProperty('isFavorite');
		expect(updatedApiData[1]).toHaveProperty('isFavorite');
		expect(updatedApiData[2]).toHaveProperty('isFavorite');
		expect(updatedApiData[3]).toHaveProperty('isFavorite');
		expect(updatedApiData[4]).toHaveProperty('isFavorite');
		expect(updatedApiData[5]).toHaveProperty('isFavorite');
	});

	it('added a boolean value to the isFavorite property, true if the id of the incoming data matches on in the favorites data, false if not', () => {
		// Arrange
		const favorites = [
			{
				id: 1,
				name: 'Bitcoin',
				symbol: 'BTC',
				slug: 'bitcoin',
				num_market_pairs: 8195,
				date_added: '2013-04-28T00:00:00.000Z',
				tags: [
					'mineable',
					'pow',
					'sha-256',
					'store-of-value',
					'state-channel',
					'coinbase-ventures-portfolio',
					'three-arrows-capital-portfolio',
					'polychain-capital-portfolio',
					'binance-labs-portfolio',
					'blockchain-capital-portfolio',
					'boostvc-portfolio',
					'cms-holdings-portfolio',
					'dcg-portfolio',
					'dragonfly-capital-portfolio',
					'electric-capital-portfolio',
					'fabric-ventures-portfolio',
					'framework-ventures-portfolio',
					'galaxy-digital-portfolio',
					'huobi-capital-portfolio',
					'alameda-research-portfolio',
					'a16z-portfolio',
					'1confirmation-portfolio',
					'winklevoss-capital-portfolio',
					'usv-portfolio',
					'placeholder-ventures-portfolio',
					'pantera-capital-portfolio',
					'multicoin-capital-portfolio',
					'paradigm-portfolio',
				],
				max_supply: 21000000,
				circulating_supply: 18905700,
				total_supply: 18905700,
				platform: null,
				cmc_rank: 1,
				last_updated: '2021-12-20T09:19:02.000Z',
				quote: {
					EUR: {
						price: 40904.02895142914,
						volume_24h: 25602321215.04118,
						volume_change_24h: 14.4722,
						percent_change_1h: -1.23155601,
						percent_change_24h: -3.13665617,
						percent_change_7d: -7.28301769,
						percent_change_30d: -21.37551877,
						percent_change_60d: -30.57768678,
						percent_change_90d: 6.62824502,
						market_cap: 773319300147.0339,
						market_cap_dominance: 40.6842,
						fully_diluted_market_cap: 858984607980.009,
						last_updated: '2021-12-20T09:20:09.000Z',
					},
				},
			},
			{
				id: 5426,
				name: 'Solana',
				symbol: 'SOL',
				slug: 'solana',
				num_market_pairs: 198,
				date_added: '2020-04-10T00:00:00.000Z',
				tags: [
					'pos',
					'platform',
					'solana-ecosystem',
					'cms-holdings-portfolio',
					'kenetic-capital-portfolio',
					'alameda-research-portfolio',
					'multicoin-capital-portfolio',
					'k300-ventures-portfolio',
				],
				max_supply: null,
				circulating_supply: 308113471.9014816,
				total_supply: 511618035.1733222,
				platform: null,
				cmc_rank: 5,
				last_updated: '2021-12-20T09:19:05.000Z',
				quote: {
					EUR: {
						price: 154.35155067683223,
						volume_24h: 1482684191.109087,
						volume_change_24h: 1.5191,
						percent_change_1h: -1.42115932,
						percent_change_24h: -6.86431274,
						percent_change_7d: 3.62189654,
						percent_change_30d: -19.46033111,
						percent_change_60d: -9.24488839,
						percent_change_90d: 21.94774446,
						market_cap: 47557792172.41627,
						market_cap_dominance: 2.5003,
						fully_diluted_market_cap: 78969037083.2325,
						last_updated: '2021-12-20T09:20:09.000Z',
					},
				},
			},
		];

		// Act
		const updatedApiData = addIsFavoriteProperty(favorites, apiData);

		// Assert
		expect(updatedApiData[0].isFavorite).toBe(true);
		expect(updatedApiData[1].isFavorite).toBe(false);
		expect(updatedApiData[2].isFavorite).toBe(false);
		expect(updatedApiData[3].isFavorite).toBe(false);
		expect(updatedApiData[4].isFavorite).toBe(true);
		expect(updatedApiData[5].isFavorite).toBe(false);
	});
});

describe('ApiCoinMarketCapTop', () => {
	beforeEach(() => {
		mockAxios.get.mockReset();
	});

	it('fetches successfully data from the API', async () => {
		// Arrange
		const response = {
			data: {
				status: {
					timestamp: '2021-12-20T09:20:28.022Z',
					error_code: 0,
					error_message: null,
					elapsed: 20,
					credit_count: 1,
					notice: null,
					total_count: 8392,
				},
				data: apiData,
			},
		};
		mockAxios.get.mockImplementationOnce(() => Promise.resolve(response));

		// Act
		const apiResult = await apiCoinMarketCapTop(6, 'USD', []);

		// Assert
		expect(apiResult).toEqual(apiData);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
	});

	it('fetches erroneously data from the API', async () => {
		// Arrange
		mockAxios.get.mockImplementationOnce(() => Promise.reject());

		// Act
		const apiResult = await apiCoinMarketCapTop(6, 'USD', []);

		// Assert
		expect(apiResult).toEqual([]);
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
	});
});

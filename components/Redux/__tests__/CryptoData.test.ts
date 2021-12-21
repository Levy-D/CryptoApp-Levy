/* eslint-disable camelcase */
import reducer from '../Slices/CryptoData';

describe('test the reducer and actions', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			cryptoData: [],
			cryptoDataUSD: [],
			cryptoDataEUR: [],
			favoritesData: [],
			cryptoDataItem: {
				isFavorite: false,
				id: 0,
				name: '',
				symbol: '',
				slug: '',
				num_market_pairs: 0,
				date_added: '',
				tags: [],
				max_supply: 0,
				circulating_supply: 0,
				total_supply: 0,
				platform: null,
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
					},
					EUR: {
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
					},
				},
			},
		});
	});
});

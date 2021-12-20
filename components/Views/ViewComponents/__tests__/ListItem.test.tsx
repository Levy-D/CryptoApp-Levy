/* eslint-disable camelcase */
import React from 'react';
import ListItem from '../ListItem';
import {render, fireEvent} from '../../../../test-utils/test-utils';
import {CmcCryptoCurrency} from '../../../Interfaces/ICoinMarketCapModel';

let item: CmcCryptoCurrency;
let navigation: any;

beforeEach(() => {
	// Arrange
	item = {
		id: 1,
		name: 'Bitcoin',
		symbol: 'BTC',
		slug: 'bitcoin',
		num_market_pairs: 8196,
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
		last_updated: '2021-12-20T10:09:02.000Z',
		quote: {
			EUR: {
				price: 40869.528198498185,
				volume_24h: 25698098196.932026,
				volume_change_24h: 14.7957,
				percent_change_1h: -0.27651847,
				percent_change_24h: -2.7854497,
				percent_change_7d: -7.21300143,
				percent_change_30d: -21.32371954,
				percent_change_60d: -30.32862831,
				percent_change_90d: 6.69622995,
				market_cap: 772667039262.3472,
				market_cap_dominance: 40.7111,
				fully_diluted_market_cap: 858260092168.4641,
				last_updated: '2021-12-20T10:09:50.000Z',
			},
		},
	};
	navigation = {navigate: jest.fn()};
});

it('renders correctly', () => {
	// Arrange

	// Act
	const tree = render(
		<ListItem item={item} navigation={navigation} />,
	).toJSON();

	// Assert
	expect(tree).toMatchSnapshot();
});

describe('Favorite Icon', () => {
	it('renders with a gray star when isFavorite = false', () => {
		// Arrange
		item.isFavorite = false;
		const style: any = {
			color: '#d3d3d3',
		};

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={navigation} />,
		);
		const icon: any = getByTestId('icon-star');

		// Assert
		expect(icon).toHaveStyle(style);
	});

	it('renders with a gold star when isFavorite = true', () => {
		// Arrange
		item.isFavorite = true;
		const style: any = {
			color: 'gold',
		};

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={navigation} />,
		);
		const icon: any = getByTestId('icon-star');

		// Assert
		expect(icon).toHaveStyle(style);
	});

	// it('changes colors when pressed', () => {
	// 	// Arrange
	// 	item.isFavorite = false;
	// 	const style: any = {
	// 		color: 'gold',
	// 	};
	// 	const {getByTestId} = render(
	// 		<ListItem item={item} navigation={navigation} />,
	// 	);
	// 	const icon: any = getByTestId('icon-star');

	// 	// Act
	// 	fireEvent.press(icon);

	// 	// Assert
	// 	expect(item.isFavorite).toBe(true);
	// });
});

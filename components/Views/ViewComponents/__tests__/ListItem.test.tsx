/* eslint-disable camelcase */
import React from 'react';
import ListItem, {styles} from '../ListItem';
import {fireEvent, mockStore, render} from '../../../../test-utils/test-utils';
import {CmcCryptoCurrency} from '../../../Interfaces/ICoinMarketCapModel';
import {
	setCryptoDataItem,
	setIsFavoriteToFalse,
	setIsFavoriteToTrue,
} from '../../../Redux/Slices/CryptoData';

let item: CmcCryptoCurrency;
let mockNavigation: any;

beforeEach(() => {
	// Arrange
	item = {
		isFavorite: false,
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
			USD: {
				price: 48734.99367730162,
				volume_24h: 29240768804.409405,
				volume_change_24h: -0.3396,
				percent_change_1h: 0.45347868,
				percent_change_24h: 4.90980381,
				percent_change_7d: 3.89633682,
				percent_change_30d: -18.53145527,
				percent_change_60d: -20.51408224,
				percent_change_90d: 12.42318288,
				market_cap: 921430381117.02,
				market_cap_dominance: 40.8726,
				fully_diluted_market_cap: 1023434867223.33,
				last_updated: '2021-12-21T16:54:02.000Z',
			},
		},
	};
	mockNavigation = {navigate: jest.fn()};
});

it('renders correctly', () => {
	// Arrange

	// Act
	const tree = render(
		<ListItem item={item} navigation={mockNavigation} />,
	).toJSON();

	// Assert
	expect(tree).toMatchSnapshot();
});

describe('Favorite Icon', () => {
	it('renders with a gray star when isFavorite = false', () => {
		// Arrange
		item.isFavorite = false;
		const style = styles.favIconIsFavoriteFalse;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const icon = getByTestId('icon-star');

		// Assert
		expect(icon).toHaveStyle(style);
	});

	it('renders with a gold star when isFavorite = true', () => {
		// Arrange
		item.isFavorite = true;
		const style = styles.favIconIsFavoriteTrue;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const icon = getByTestId('icon-star');

		// Assert
		expect(icon).toHaveStyle(style);
	});

	it('dispatches setIsFavoriteToTrue if isFavorite = false', () => {
		// Arrange
		item.isFavorite = false;
		const store = mockStore();
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{store},
		);
		const icon = getByTestId('icon-star');

		// Act
		fireEvent.press(icon);

		// Assert
		expect(store.dispatch).toHaveBeenCalledWith(setIsFavoriteToTrue(item));
	});

	it('dispatches setIsFavoriteToFalse if isFavorite = true', () => {
		// Arrange
		item.isFavorite = true;
		const store = mockStore();
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{store},
		);
		const icon = getByTestId('icon-star');

		// Act
		fireEvent.press(icon);

		// Assert
		expect(store.dispatch).toHaveBeenCalledWith(setIsFavoriteToFalse(item));
	});

	// it('dispatches nothing if isFavorite = undefined', () => {
	// 	// Arrange
	// 	item.isFavorite = undefined;
	// 	const store = mockStore();
	// 	const {getByTestId} = render(
	// 		<ListItem item={item} navigation={mockNavigation} />,
	// 		{store},
	// 	);
	// 	const icon = getByTestId('icon-star');

	// 	// Act
	// 	fireEvent.press(icon);

	// 	// Assert
	// 	expect(store.dispatch).toBeCalledTimes(0);
	// });
});

describe('Chainlink Highlighting', () => {
	beforeEach(() => {
		// Arrange
		item = {
			isFavorite: false,
			id: 1975,
			name: 'Chainlink',
			symbol: 'LINK',
			slug: 'chainlink',
			num_market_pairs: 458,
			date_added: '2017-09-20T00:00:00.000Z',
			tags: [
				'platform',
				'defi',
				'oracles',
				'smart-contracts',
				'substrate',
				'polkadot',
				'binance-smart-chain',
				'polkadot-ecosystem',
				'avalanche-ecosystem',
				'solana-ecosystem',
				'framework-ventures-portfolio',
				'polygon-ecosystem',
				'fantom-ecosystem',
				'cardano-ecosystem',
				'web3',
				'near-protocol-ecosystem',
			],
			max_supply: 1000000000,
			circulating_supply: 467009550.4397637,
			total_supply: 1000000000,
			platform: {
				id: 1027,
				name: 'Ethereum',
				symbol: 'ETH',
				slug: 'ethereum',
				token_address: '0x514910771af9ca656af840dff83e8264ecf986ca',
			},
			cmc_rank: 22,
			last_updated: '2021-12-21T09:28:11.000Z',
			quote: {
				USD: {
					price: 16.970193904688774,
					volume_24h: 635504559.417901,
					volume_change_24h: 7.3977,
					percent_change_1h: -0.25999981,
					percent_change_24h: 3.91910039,
					percent_change_7d: 3.74857498,
					percent_change_30d: -32.08758899,
					percent_change_60d: -34.74246881,
					percent_change_90d: -15.98782675,
					market_cap: 7925242626.304322,
					market_cap_dominance: 0.3983,
					fully_diluted_market_cap: 16970193904.691591,
					last_updated: '2021-12-21T09:29:56.000Z',
				},
			},
		};
	});

	it('should render highlighted when the ID matches that of chainlink and stateHighlightChainlink is TRUE and percent is positive', () => {
		// Arrange
		const styleListItem = styles.listItemChainlink;
		const styleListItemName = styles.listItemNameChainlink;
		const styleListItemPrice = styles.listItemPriceChainlink;
		const styleListItemPercentPositive =
			styles.listItemPercentPositiveChainlink;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: true, displayEUR: false},
				},
			},
		);
		const touchableOpacity = getByTestId('touchable-opacity');
		const itemName = getByTestId('name');
		const itemPrice = getByTestId('price');
		const itemPercent = getByTestId('percent');

		// Assert
		expect(touchableOpacity).toHaveStyle(styleListItem);
		expect(itemName).toHaveStyle(styleListItemName);
		expect(itemPrice).toHaveStyle(styleListItemPrice);
		expect(itemPercent).toHaveStyle(styleListItemPercentPositive);
	});

	it('should render highlighted when the ID matches that of chainlink and stateHighlightChainlink is TRUE and percent is negative', () => {
		// Arrange
		item.quote.USD!.percent_change_24h = -1;
		const styleListItem = styles.listItemChainlink;
		const styleListItemName = styles.listItemNameChainlink;
		const styleListItemPrice = styles.listItemPriceChainlink;
		const styleListItemPercentNegative =
			styles.listItemPercentNegativeChainlink;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: true, displayEUR: false},
				},
			},
		);
		const touchableOpacity = getByTestId('touchable-opacity');
		const itemName = getByTestId('name');
		const itemPrice = getByTestId('price');
		const itemPercent = getByTestId('percent');

		// Assert
		expect(touchableOpacity).toHaveStyle(styleListItem);
		expect(itemName).toHaveStyle(styleListItemName);
		expect(itemPrice).toHaveStyle(styleListItemPrice);
		expect(itemPercent).toHaveStyle(styleListItemPercentNegative);
	});

	it('should NOT render into the color ChainlinkBlue when the ID matches that of chainlink and stateHighlightChainlink is FALSE', () => {
		// Arrange
		const styleListItem = styles.listItem;
		const styleListItemName = styles.listItemName;
		const styleListItemPrice = styles.listItemPrice;
		const styleListItemPercentPositive = styles.listItemPercentPositive;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: false, displayEUR: false},
				},
			},
		);
		const touchableOpacity = getByTestId('touchable-opacity');
		const itemName = getByTestId('name');
		const itemPrice = getByTestId('price');
		const itemPercent = getByTestId('percent');

		// Assert
		expect(touchableOpacity).toHaveStyle(styleListItem);
		expect(itemName).toHaveStyle(styleListItemName);
		expect(itemPrice).toHaveStyle(styleListItemPrice);
		expect(itemPercent).toHaveStyle(styleListItemPercentPositive);
	});

	it('should NOT render into the color ChainlinkBlue when the ID NOT matches that of chainlink and stateHighlightChainlink is FALSE', () => {
		// Arrange
		item.id = 1;
		const styleListItem = styles.listItem;
		const styleListItemName = styles.listItemName;
		const styleListItemPrice = styles.listItemPrice;
		const styleListItemPercentPositive = styles.listItemPercentPositive;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: false, displayEUR: false},
				},
			},
		);
		const touchableOpacity = getByTestId('touchable-opacity');
		const itemName = getByTestId('name');
		const itemPrice = getByTestId('price');
		const itemPercent = getByTestId('percent');

		// Assert
		expect(touchableOpacity).toHaveStyle(styleListItem);
		expect(itemName).toHaveStyle(styleListItemName);
		expect(itemPrice).toHaveStyle(styleListItemPrice);
		expect(itemPercent).toHaveStyle(styleListItemPercentPositive);
	});

	it('should NOT render into the color ChainlinkBlue when the ID NOT matches that of chainlink and stateHighlightChainlink is TRUE', () => {
		// Arrange
		item.id = 1;
		const styleListItem = styles.listItem;
		const styleListItemName = styles.listItemName;
		const styleListItemPrice = styles.listItemPrice;
		const styleListItemPercentPositive = styles.listItemPercentPositive;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: true, displayEUR: false},
				},
			},
		);
		const touchableOpacity = getByTestId('touchable-opacity');
		const itemName = getByTestId('name');
		const itemPrice = getByTestId('price');
		const itemPercent = getByTestId('percent');

		// Assert
		expect(touchableOpacity).toHaveStyle(styleListItem);
		expect(itemName).toHaveStyle(styleListItemName);
		expect(itemPrice).toHaveStyle(styleListItemPrice);
		expect(itemPercent).toHaveStyle(styleListItemPercentPositive);
	});
});

describe('Valuta', () => {
	it('should render with EUR values', () => {
		// Arrange
		item.quote.EUR!.price = 2000;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: false, displayEUR: true},
				},
			},
		);
		const itemPrice = getByTestId('price');

		// Assert
		expect(itemPrice).toHaveTextContent('€2000.00');
	});

	it('should render with USD values', () => {
		// Arrange
		item.quote.USD!.price = 1000;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{
				preloadedState: {
					userSettings: {highlightChainlink: false, displayEUR: false},
				},
			},
		);
		const itemPrice = getByTestId('price');

		// Assert
		expect(itemPrice).toHaveTextContent('$1000.00');
	});

	it('should round down to 2 digits after the comma if the price is 1', () => {
		// Arrange
		item.quote.USD!.price = 1;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const itemPrice = getByTestId('price');

		// Assert
		expect(itemPrice).toHaveTextContent('$1.00');
	});

	it('should round down to 2 digits after the comma if the price is higher than 1', () => {
		// Arrange
		item.quote.USD!.price = 1.01;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const itemPrice = getByTestId('price');

		// Assert
		expect(itemPrice).toHaveTextContent('$1.01');
	});

	it('should show 4 digits to precision if the price is lower than 1', () => {
		// Arrange
		item.quote.USD!.price = 0.995456464;

		// Act
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const itemPrice = getByTestId('price');

		// Assert
		expect(itemPrice).toHaveTextContent('$0.9955');
	});
});

describe('Press cryptocurrency', () => {
	it('dispatches setCryptoDataItem', () => {
		// Arrange
		const store = mockStore();
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
			{store},
		);
		const crypto = getByTestId('touchable-opacity');

		// Act
		fireEvent.press(crypto);

		// Assert
		expect(store.dispatch).toHaveBeenCalledWith(setCryptoDataItem(item));
	});

	it('navigates to Crypto Details', () => {
		// Arrange
		const {getByTestId} = render(
			<ListItem item={item} navigation={mockNavigation} />,
		);
		const crypto = getByTestId('touchable-opacity');

		// Act
		fireEvent.press(crypto);

		// Assert
		expect(mockNavigation.navigate).toHaveBeenCalledWith('Crypto Details');
	});
});

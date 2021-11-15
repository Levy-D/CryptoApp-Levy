import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DataItemContext, IsEnabledUseEURContext} from '../../Helper/Context';
import {CmcCryptoCurrency} from '../../Interfaces/ICoinMarketCapModel';
import SubHeader from '../ViewComponents/SubHeader';

const cryptoCurrencyPage = () => {
	const {dataItem} = useContext(DataItemContext);

	if (dataItem === null) {
		return (<View style={styles.volumeContainer}>
			<Text>Crypto not Found</Text>
		</View>
		);
	}

	const {isEnabledUseEUR} = useContext(IsEnabledUseEURContext);
	const valuta = isEnabledUseEUR ? 'EUR' : 'USD';
	const valutaSymbol = isEnabledUseEUR ? '€' : '$';
	const maxSupply: String
		= dataItem.max_supply === undefined || dataItem.max_supply === null
			? 'N/A'
			: dataItem.max_supply.toFixed(2);
	const [percent, setPercent] = useState<Number>(
		Number.parseFloat(dataItem.quote[valuta].percent_change_24h.toFixed(2)),
	);
	const [active1h, setActive1h] = useState<Boolean>(false);
	const [active24h, setActive24h] = useState<Boolean>(true);
	const [active7d, setActive7d] = useState<Boolean>(false);
	const [active30d, setActive30d] = useState<Boolean>(false);
	const [active90d, setActive90d] = useState<Boolean>(false);
	const {price} = dataItem.quote[valuta];

	useEffect(() => {
		setPercent(percent);
	}, [percent]);

	function btnPress(percentChange: String, dataItem: CmcCryptoCurrency) {
		setActive1h(false);
		setActive24h(false);
		setActive7d(false);
		setActive30d(false);
		setActive90d(false);
		switch (percentChange) {
			case '1h':
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_1h.toFixed(2),
					),
				);
				setActive1h(true);
				break;

			case '24h':
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_24h.toFixed(2),
					),
				);
				setActive24h(true);
				break;

			case '7d':
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_7d.toFixed(2),
					),
				);
				setActive7d(true);
				break;

			case '30d':
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_30d.toFixed(2),
					),
				);
				setActive30d(true);
				break;

			case '90d':
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_90d.toFixed(2),
					),
				);
				setActive90d(true);
				break;

			default:
				setPercent(
					Number.parseFloat(
						dataItem.quote[valuta].percent_change_24h.toFixed(2),
					),
				);
				setActive24h(true);
				break;
		}
	}

	return (
		<View>
			<View style={styles.volumeContainer}>
				<SubHeader title={dataItem.name}></SubHeader>
				<Text style={styles.price}>{price < 1
					? `${valutaSymbol}${price.toPrecision(4)}`
					: `${valutaSymbol}${price.toFixed(2)}`}</Text>
				<Text
					style={
						percent < 0
							? styles.itemPercentNegative
							: styles.itemPercentPositive
					}>
					{percent}%
				</Text>
				<View style={styles.volume}>
					<Text
						style={active1h ? styles.volumeTextActive : styles.volumeText}
						onPress={() => btnPress('1h', dataItem)}>
						1h
					</Text>
					<Text
						style={active24h ? styles.volumeTextActive : styles.volumeText}
						onPress={() => btnPress('24h', dataItem)}>
						24h
					</Text>
					<Text
						style={active7d ? styles.volumeTextActive : styles.volumeText}
						onPress={() => btnPress('7d', dataItem)}>
						7d
					</Text>
					<Text
						style={active30d ? styles.volumeTextActive : styles.volumeText}
						onPress={() => btnPress('30d', dataItem)}>
						30d
					</Text>
					<Text
						style={active90d ? styles.volumeTextActive : styles.volumeText}
						onPress={() => btnPress('90d', dataItem)}>
						90d
					</Text>
				</View>
			</View>
			<SubHeader title="Statistics"></SubHeader>
			<View style={styles.view}>
				<View style={styles.textContainerFirst}>
					<Text>Rank</Text>
					<Text>#{dataItem.cmc_rank}</Text>
				</View>
				<View style={styles.textContainerFirst}>
					<Text>Market Dominance</Text>
					<Text>{dataItem.quote[valuta].market_cap_dominance.toFixed(2)}%</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Market Cap</Text>
					<Text>
						{valutaSymbol}
						{dataItem.quote[valuta].market_cap.toFixed(2)}
					</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Fully Diluted Market Cap</Text>
					<Text>
						{valutaSymbol}
						{dataItem.quote[valuta].fully_diluted_market_cap.toFixed(2)}
					</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Volume 24h</Text>
					<Text>
						{valutaSymbol}
						{dataItem.quote[valuta].volume_24h.toFixed(2)}
					</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Max Supply</Text>
					<Text>{maxSupply}</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Circulating Supply</Text>
					<Text>{dataItem.circulating_supply.toFixed(2)}</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>Total Supply</Text>
					<Text>{dataItem.total_supply.toFixed(2)}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	logo: {
		width: 64,
		height: 64,
	},
	volumeContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	price: {
		textAlignVertical: 'center',
		paddingRight: 15,
		fontSize: 18,
	},
	itemPercentNegative: {
		textAlignVertical: 'center',
		paddingRight: 15,
		fontSize: 18,
		textAlign: 'right',
		color: 'red',
		width: 100,
	},
	itemPercentPositive: {
		textAlignVertical: 'center',
		paddingRight: 15,
		fontSize: 18,
		textAlign: 'right',
		color: 'green',
		width: 100,
	},
	volume: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
	},
	volumeText: {
		backgroundColor: '#ddd',
		paddingHorizontal: 15,
		borderRadius: 10,
	},
	volumeTextActive: {
		backgroundColor: '#999',
		paddingHorizontal: 15,
		borderRadius: 10,
	},
	textContainer: {
		width: '50%',
		padding: 15,
		borderBottomWidth: 2,
		borderColor: '#eee',
	},
	textContainerFirst: {
		width: '50%',
		padding: 15,
		borderTopWidth: 2,
		borderBottomWidth: 2,
		borderColor: '#eee',
	},
});

export default cryptoCurrencyPage;

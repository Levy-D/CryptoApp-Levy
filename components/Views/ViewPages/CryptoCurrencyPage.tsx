import React, { useContext } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { DataItemContext } from '../../Helper/Context';
import Header from '../ViewComponents/Header';
import SubHeader from '../ViewComponents/SubHeader';

const cryptoCurrencyPage = () => {
	const { dataItem } = useContext(DataItemContext);

	return (
		<View style={styles.view}>
			<Header title={dataItem.name}></Header>
			<SubHeader title='Statistics'></SubHeader>
			<Text>Market Cap</Text> 
			<Text>{dataItem.quote.USD.market_cap.toFixed(2)}</Text>
			<Text>Volume 24h</Text> 
			<Text>{dataItem.quote.USD.volume_24h.toFixed(2)}</Text>
			<Text>Max Supply</Text> 
			<Text>{dataItem.max_supply.toFixed(2)}</Text>
			{/* <Text>All Time High</Text> 
			<Text>{dataItem.quote.USD.market_cap}</Text>
			<Text>All Time Low</Text> 
			<Text>{dataItem.quote.USD.market_cap}</Text> */}
			<Text>Fully Diluted Market Cap</Text> 
			<Text>{dataItem.quote.USD.fully_diluted_market_cap.toFixed(2)}</Text>
			<Text>Circulating Supply</Text> 
			<Text>{dataItem.circulating_supply.toFixed(2)}</Text>
			<Text>Total Supply</Text> 
			<Text>{dataItem.total_supply.toFixed(2)}</Text>
			<Text>Rank</Text> 
			<Text>#{dataItem.cmc_rank}</Text>
			<Text>Market Dominance</Text> 
			<Text>{dataItem.quote.USD.market_cap_dominance.toFixed(2)}%</Text>
		</View>
	);
};


const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
	}
});

export default cryptoCurrencyPage;

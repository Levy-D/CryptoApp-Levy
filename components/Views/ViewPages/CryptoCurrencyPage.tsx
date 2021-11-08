import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import { DataItemContext } from '../../Helper/Context';
import Header from '../ViewComponents/Header';

const cryptoCurrencyPage = () => { 
	const {dataItem} = useContext(DataItemContext);

	return(
	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		<Header title={dataItem.name}></Header>
	</View>
	);
};


export default cryptoCurrencyPage;

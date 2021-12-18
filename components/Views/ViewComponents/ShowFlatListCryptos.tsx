import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {IFlatList} from '../../Interfaces/IViewComponents';
import {selectCryptoData} from '../../Redux/Slices/CryptoData';
import {useSelector} from 'react-redux';

const List = ({navigation}: IFlatList) => {
	const data = useSelector(selectCryptoData);

	return (
		<FlatList
			data={data}
			renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
		/>);
};

export default List;

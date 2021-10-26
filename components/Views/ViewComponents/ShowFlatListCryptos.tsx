import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {IFlatList} from '../../Interfaces/IViewComponents';
import {DataContext} from '../../Helper/Context';

const List = ({navigation}: IFlatList) => {
	const {data} = useContext(DataContext);

	return (
		<FlatList
			data={data}
			renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
		/>);
};

export default List;

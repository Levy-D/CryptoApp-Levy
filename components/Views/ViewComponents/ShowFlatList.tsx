import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {IFlatList} from '../../Interfaces/IViewComponents';

const List = ({data}: IFlatList) => (
	<FlatList
		data={data}
		renderItem={({item}) => <ListItem item={item} />}
	/>
);

export default List;

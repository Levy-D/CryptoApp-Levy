import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import IListItem from '../../Interfaces/IListItem';

const List = ({data}: IListItem) => (
	<FlatList
		data={data}
		renderItem={({item}) => <ListItem item={item} />}
	/>
);

export default List;

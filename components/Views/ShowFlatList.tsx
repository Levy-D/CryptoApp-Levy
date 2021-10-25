import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import IListItem from '../Interfaces/IListItem';

const List = ({onFavorite, data}: IListItem) => (
	<FlatList
		data={data}
		renderItem={({item}) => <ListItem item={item} onFavorite={onFavorite} />}
	/>
);

export default List;

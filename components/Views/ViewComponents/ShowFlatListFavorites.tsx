import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {IFlatList} from '../../Interfaces/IViewComponents';
import {selectFavoritesData} from '../../Redux/Slices/Favorites';
import {useSelector} from 'react-redux';

const List = ({navigation}: IFlatList) => {
	const favoritesData = useSelector(selectFavoritesData);

	return (
		<FlatList
			data={favoritesData}
			renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
		/>);
};

export default List;

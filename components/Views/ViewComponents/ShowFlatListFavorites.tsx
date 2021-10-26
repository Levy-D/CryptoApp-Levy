import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {IFlatList} from '../../Interfaces/IViewComponents';
import {FavoritesContext} from '../../Helper/Context';

const List = ({navigation}: IFlatList) => {
	const {favoritesData} = useContext(FavoritesContext);

	return (
		<FlatList
			data={favoritesData}
			renderItem={({item}) => <ListItem item={item} navigation={navigation} />}
		/>);
};

export default List;

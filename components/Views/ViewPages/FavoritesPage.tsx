import React, {useContext} from 'react';
import {View} from 'react-native';
import ShowFlatList from '../ViewComponents/ShowFlatList';
import {FavoritesContext} from '../../Helper/Context';

const favoritesPage = () => {
	const {favoritesData} = useContext(FavoritesContext);

	return (
		<View>
			<ShowFlatList data={favoritesData}/>
		</View>
	);
};

export default favoritesPage;

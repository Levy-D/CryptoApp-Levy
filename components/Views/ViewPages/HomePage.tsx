import React, {useContext} from 'react';
import {View} from 'react-native';
import ShowFlatList from '../ViewComponents/ShowFlatList';
import {DataContext} from '../../Helper/Context';

const homePage = () => {
	const {data} = useContext(DataContext);

	return (
		<View>
			<ShowFlatList data={data} />
		</View>
	);
};

export default homePage;

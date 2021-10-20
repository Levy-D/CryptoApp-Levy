import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, FlatList } from 'react-native';
import ListItem from './ListItem';
import IListItem from './Interfaces/IListItem'

const List = ({ onFavorite, data }: IListItem) => {

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} onFavorite={onFavorite} />}
      />
    </View>
  );

}

export default List;
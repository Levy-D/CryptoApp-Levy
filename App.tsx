import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import APICoinMarketCapTop from './components/APICoinMarketCap';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ShowFlatList from './components/ShowFlatList';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { KeyList } from './components/AsyncStorage';


const App = () => {

  //Get data from API
  let data: never[] | null = APICoinMarketCapTop(5);

  // let newData: never[] | null = KeyList(data);

  const [favoriteIDs, setFavIDs] = useState([])

  async function fetchAllItems() {
    try {
      await AsyncStorage.getAllKeys().then(async keys => {
        if (keys.length !== 0) {
          {
            await AsyncStorage.multiGet(keys).then(key => {
              let ids: number[] = []
              key.forEach(data => {
                ids.push(parseInt(data[1]));
              });
              setFavIDs(ids);
            });
          }
        }
        else {
          setFavIDs([]);
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllItems();
    console.log(data);
    if (data != null) {
      data.forEach(item => {
        if (favoriteIDs.includes(item.id)) {
          item.isFavorite = true;
        }
      })
    };
  }, []);


  let newData: never[] | null = [];

  if (data != null) {
    newData = data.filter(item => favoriteIDs.includes(item.id));
    data.forEach(item => {
      if (favoriteIDs.includes(item.id)) {
        item.isFavorite = true;
      }
    });
  };

  console.log(favoriteIDs)

  return (
    <View>
      <Header />
      <SubHeader title="Top 5 Crypto Currency" />
      <ShowFlatList data={data} onFavorite={fetchAllItems} />
      <SubHeader title="Favorites" />
      <ShowFlatList data={newData} onFavorite={fetchAllItems} />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default App;
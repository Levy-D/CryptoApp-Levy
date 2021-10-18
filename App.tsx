import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CryptoData from './components/GetTop5CryptoCurrency';



const App = () => {
  let favoritesList = [];

  const addToFavorites = (item) => {
    console.log('addToFavorites test', item.id);
  };


  return (
    <View style={styles.container}>
      <Header />
      <SubHeader title="Favorites" />
      {/* <FavoritesList /> */}
      <SubHeader title="Top 5 Crypto Currency" />
      <CryptoData onFavorite={addToFavorites} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
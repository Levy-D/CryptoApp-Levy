import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import CryptoData from './components/GetTop5CryptoCurrency';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SubHeader title="Top 5 Crypto Currency" />
      <CryptoData />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
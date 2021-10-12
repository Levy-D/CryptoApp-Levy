import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, FlatList } from 'react-native';
import ListItem from './ListItem';

const Data = () => {

  const client = axios.create({
    baseURL: "https://pro-api.coinmarketcap.com",
    headers:
    {
      "X-CMC_PRO_API_KEY": "cd836a4e-36d8-4404-8857-7ded29edda69"
    }
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .get("/v1/cryptocurrency/listings/latest?limit=5")
      .then(async (response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  if (!data) return null;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );

}

export default Data;
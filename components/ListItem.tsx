import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const ListItem = ({ item }) => {
    let price = item.quote.USD.price;
    price = parseFloat(price).toFixed(2);
    let percent_24h = item.quote.USD.percent_change_24h
    percent_24h = parseFloat(percent_24h).toFixed(2);


    return (
        <View style={styles.listItem} >
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemPrice}>$ {price}</Text>
            <Text style={(percent_24h < 0) ? styles.listItemPercentNegative : styles.listItemPercentPositive}>{percent_24h}%</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemName: {
        fontSize: 20,
        width: 200
    },
    listItemPrice: {
        fontSize: 20,
        width: 200
    },
    listItemPercentNegative: {
        fontSize: 20,
        width: 100,
        textAlign: 'right',
        color: 'red'
    },
    listItemPercentPositive: {
        fontSize: 20,
        width: 100,
        textAlign: 'right',
        color: 'green'
    }
});

export default ListItem;
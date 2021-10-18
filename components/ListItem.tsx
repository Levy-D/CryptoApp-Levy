import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-vector-icons/dist/FontAwesome';


const ListItem = ({ item, onFavorite }) => {
    let price = item.quote.USD.price;
    price = parseFloat(price).toFixed(2);
    let percent_24h = item.quote.USD.percent_change_24h
    percent_24h = parseFloat(percent_24h).toFixed(2);


    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView} >
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemPrice}>$ {price}</Text>
                <Text style={(percent_24h < 0) ? styles.listItemPercentNegative : styles.listItemPercentPositive}>{percent_24h}%</Text>
                {/* <Icon name="star" ></Icon> */}
                <Button onPress={() => onFavorite(item)} title='FAV' color='yellow' />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemName: {
        fontSize: 20,
        width: 150
    },
    listItemPrice: {
        fontSize: 20,
        width: 100
    },
    listItemPercentNegative: {
        fontSize: 20,
        width: 75,
        textAlign: 'right',
        color: 'red'
    },
    listItemPercentPositive: {
        fontSize: 20,
        width: 75,
        textAlign: 'right',
        color: 'green'
    },
    listItemFavorite: {
        fontSize: 20,
        width: 50,
        textAlign: 'right',
        color: 'green'
    }
});

export default ListItem;
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
// import { Icon } from 'react-native-vector-icons/dist/FontAwesome';
import IListItem from './Interfaces/IListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListItem = ({ item, onFavorite }: IListItem) => {
    let price = item.quote.USD.price;
    price = parseFloat(price).toFixed(2);
    let percent_24h = item.quote.USD.percent_change_24h;
    percent_24h = parseFloat(percent_24h).toFixed(2);

    const [favoriteValue, setFavorite] = useState(item.id);

    const saveValue = async (storageId: string) => {
        try {
            const jsonValue = JSON.stringify(favoriteValue);
            await AsyncStorage.setItem(storageId, jsonValue);
            console.log(storageId, "added");
            console.log("All Keys", await AsyncStorage.getAllKeys());
        } catch (e) {
            console.log(e);
        }
    }

    const deleteValue = async (storageId: string) => {
        try {
            await AsyncStorage.removeItem(storageId)
            console.log(storageId, "deleted");
            console.log("Remaining Keys", await AsyncStorage.getAllKeys());
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView} >
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemPrice}>$ {price}</Text>
                <Text style={(percent_24h < 0) ? styles.listItemPercentNegative : styles.listItemPercentPositive}>{percent_24h}%</Text>
                {/* <Icon name="star" ></Icon> */}
                <Button onPress={() => {
                    try {
                        let storageId: string = "ID_" + item.id;
                        if (!item.isFavorite) {
                            setFavorite(item.id);
                            saveValue(storageId);
                            onFavorite();
                            item.isFavorite = true;
                        }
                        else {
                            deleteValue(storageId);
                            onFavorite();
                            item.isFavorite = false;;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                } title='FAV' color='yellow' />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'center',
        height: 70,
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    }
});

export default ListItem;
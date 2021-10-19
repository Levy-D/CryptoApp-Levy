import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IHeader from './Interfaces/IHeader'

const Header = ({ title }: IHeader) => {
    return (
        <View style={styles.header} >
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

Header.defaultProps = {
    title: 'Crypto App'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },
});

export default Header;
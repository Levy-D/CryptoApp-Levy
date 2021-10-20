import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScaledSize } from 'react-native';
import IHeader from './Interfaces/IHeader'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title }: IHeader) => {
    return (
        <View style={styles.header} >
            <Text style={styles.text}><Icon name='bitcoin' style={styles.text}></Icon> {title} <Icon name='bitcoin' style={styles.text} ></Icon></Text>
        </View>
    )
};

Header.defaultProps = {
    title: 'Crypto App'
}

let width: number = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: width,
        padding: 15,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    },
});

export default Header;
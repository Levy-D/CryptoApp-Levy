import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const SubHeader = ({ title }) => {
    return (
        <View style={styles.subHeader} >
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subHeader: {
        height: 60,
        padding: 15,
        backgroundColor: 'DarkGray'
    },
    text: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center'
    },
});

export default SubHeader;
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Card = props => {
    return (
        <TouchableOpacity style={ {...styles.cardStyle, ...props.style} } onPress={ props.onPress }>
            { props.children }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        position: "relative",
        shadowColor: 'black',
        shadowOffset: { //Only iOS
            width: 0,
            height: 0
        },
        shadowRadius: 0.5,
        shadowOpacity: 0.1,
        // elevation: 5, //Only Android
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    cardImage:{
        width: '100%',
        height: 150,
        borderRadius: 15,
    },
});

export default Card;
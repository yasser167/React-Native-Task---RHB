import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return (
        <TextInput 
            {...props}
            style={ {...styles.inputStyle, ...props.style} } 
        />
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        height: 20,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        // borderBottomWidth: 1,
        marginVertical: 20,
        fontSize: 20
    },
});

export default Input;
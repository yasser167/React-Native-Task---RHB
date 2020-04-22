import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from './input';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = props => {
    return (
        <View style={ styles.searchWrapper }>
            <View style={ styles.searchWrapperContent }>
                <Icon name="search" size={30} style={ styles.searchIcon } color="#ccc" />

                <Input 
                    blurOnSubmit
                    autoCapitalize='none' 
                    autoCorrect={ false }
                    // keyboardType="number-pad"
                    // maxLength={2}
                    onChangeText={ () => {}  }
                    placeholder="Search movie title..."
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,        
    },
    searchWrapperContent: {
        flexDirection: "row",
        alignItems: "center",
        width: '95%',
        paddingLeft: 30,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',

        shadowColor: 'black',
        shadowOffset: { //Only iOS
            width: 0,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 5, //Only Android
    },
    searchIcon: {
        marginRight: 10,
    }
});

export default Search;
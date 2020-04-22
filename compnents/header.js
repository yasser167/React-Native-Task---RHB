import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './search';

const Header = props => {
    return (
        <View style={ styles.headerWrapper }>
            <LinearGradient
                start={[0, 1]} end={[1, 0]}
                colors={['#ffd900', '#feb300']}
                style={ styles.linearGradient }
                >
            </LinearGradient>
            
            <View style={ styles.header }>
                {/* <Text style={ styles.headerMenuIcon }>ICON</Text> */}
                <Icon name="bars" size={30} color="#FFFFFF" />

            
                <Image 
                    source={ require('./../assets/YZ_Avatar_Farmer.jpg') }
                    style={ styles.headerImage }
                />
            </View>

            <View>
                <Search />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    headerWrapper: {
        // backgroundColor: Colors.accent,
    },
    header: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        height: 130,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // marginBottom: 10,
        // backgroundColor: Colors.accent,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 150,
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    },
    headerMenuIcon: {
        color: '#FFFFFF',
        fontSize: 20,
        borderColor: '#000',
        borderWidth: 1,
    },
    headerImage: {
        width: 20,
        height: 10,
        padding: 20,
        borderRadius: 100,
        borderColor: 'transparent',
        borderWidth: 1
    },
});

export default Header;
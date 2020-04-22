import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = props => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <View style={ styles.footerWrapper }>
            <View style={ styles.footerGroup }>
                <TouchableOpacity style={ styles.footerItem } onPress={ () => { setActiveTab('home') } }>
                    <Icon 
                        name="home" 
                        size={25} 
                        color={ activeTab === 'home' ? "#ffbf00" : "#ccc" } 
                    />
                    
                    <Text style={ styles.footerText }>Home</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={ styles.footerItem } onPress={ () => { setActiveTab('ticket') } }>
                    <Icon 
                        name="ticket" 
                        size={25} 
                        color={ activeTab === 'ticket' ? "#ffbf00" : "#ccc" } 
                    />
                    
                    <Text style={ styles.footerText }>Tickets</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={ styles.footerButton }>
                    <Icon 
                        name="ticket" 
                        size={40} 
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>

            <View style={ styles.footerGroup }>
                <TouchableOpacity style={ styles.footerItem } onPress={ () => { setActiveTab('movie') } }>
                    <Icon 
                        name="play" 
                        size={25} 
                        color={ activeTab === 'movie' ? "#ffbf00" : "#ccc" } 
                    />
                    
                    <Text style={ styles.footerText }>Movies</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.footerItem } onPress={ () => { setActiveTab('cinema') } }>
                    <Icon 
                        name="file-movie-o" 
                        size={25} 
                        color={ activeTab === 'cinema' ? "#ffbf00" : "#ccc" } 
                    />
                    
                    <Text style={ styles.footerText }>Cinemas</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    footerWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 70,
        backgroundColor: 'transparent',
    },
    footerGroup: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        width: '40%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        shadowColor: '#ffbf00',
        shadowOffset: { //Only iOS
            width: 0,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.7,
        elevation: 5, //Only Android
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#eee'

    },
    footerItem: {
        justifyContent: "space-between",
        alignItems: "center",
        width: '50%',
        height: 40,
        // backgroundColor: Colors.accent,
    },
    footerButton: {
        width: '100%',
        backgroundColor: '#ffbf00',
        borderRadius: 50,
        padding: 13,
        shadowOffset: { //Only iOS
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5, //Only Android
    },
    footerText: {
        color: 'black',
        fontSize: 10,
        marginTop: 5,
        textTransform: "uppercase",
    },
});

export default Footer;
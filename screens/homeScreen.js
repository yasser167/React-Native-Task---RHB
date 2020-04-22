import React, { useState } from 'react';
import { StyleSheet, 
    View, 
    Text, 
    Button,
    ScrollView,
    Keyboard,
    FlatList,
    Modal,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
  } from 'react-native';
import Header from './../compnents/header';
import Category from '../compnents/category';
import Card from './../compnents/card';
import Data from './../constants/data';

const HomeScreen = props => {

    const [advActive, setAdvActive] = useState( false );

    // Handle Opening and Closing the Modal
    const advertHandeler = () => {
        setAdvActive( true );
    }

    return (
        <ScrollView style={ styles.screen }>
            <Category 
                title="Cinema around your area" 
                type="cinemas"
            />

            <Category 
                title="New releases" 
                onClick={ advertHandeler }
            />

            <Category 
                title="You might want to see this" 
                onClick={ advertHandeler }
            />
            
            <Category 
                title="Documentaries" 
                onClick={ advertHandeler }
            />

            <Category 
                title="Recently watched" 
                onClick={ advertHandeler }
            />

            {/* Advertisement Modal */}
            <Modal 
                visible={ advActive } 
                animationType="slide"
                transparent={ false }  
            >
                { 
                    Data.map( (item, index) => {
                        return (
                            item.category === 'advertisement'
                            ?
                            <View style={ styles.adModal } key={ index }>
                                <View style={ styles.cardInfoWrapper }>
                                    <Image 
                                        source={ item.image }
                                        style={ styles.adImage }
                                    />

                                    <Text style={ styles.adText }>{ item.title }</Text>
                                </View>

                                {/* Close Advertisement Modal */}
                                <TouchableOpacity onPress={ () => { setAdvActive( false ) } } >
                                    <Text style={ styles.adCloseButton }>CLOSE</Text>
                                </TouchableOpacity>
                            </View> 
                            :
                            null
                        )
                    })  
                }
            </Modal>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // paddingTop: Platform.OS === "iOS" ? StatusBar.currentHeight : 0,
        marginBottom: '7%',
    },
    adModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    adImage: {
        alignSelf: 'center',
        width: 150,
        height: 180
    },
    adCloseButton: {
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        color: 'red',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 24,
    },
    adText: {
        flexDirection: "row",
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'center',
    }
})
export default HomeScreen;
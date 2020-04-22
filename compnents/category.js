import React, { useState } from 'react';
import { StyleSheet, 
    View, 
    Text, 
    Button, 
    Image, 
    FlatList, 
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Card from './card';
import Data from './../constants/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const Category = props => {

    const renderStars = rating => {
        const itemArr = Array.apply(null, {length: rating + 1});
        let integer = rating.toFixed(1).split(".")[0];
        let decimal = rating.toFixed(1).split(".")[1];
        
        return itemArr.map( (star, index) => {
            
            if( (index + 1) === itemArr.length ) {  // Last item in the loop
                if( decimal > 0 ) { // Half Star
                    return (
                        <Icon 
                            name='star-half'
                            size={25} 
                            color="#ffbf00" 
                            key={ index }
                        />
                    )
                } else {
                    return (
                        <Icon 
                            name='star'
                            size={25} 
                            color="#ffbf00" 
                            key={ index }
                        />
                    )
                }
            } else {
                return (
                    <Icon 
                        name='star'
                        size={25} 
                        color="#ffbf00" 
                        key={ index }
                    />
                )
            }
            
        })
    }

    return (
        <View style={ styles.categoryWrapper }>
            <Text style={ styles.categoryTitle }>
                { props.title }
            </Text>

            { 
                props.type === 'cinemas'
                
                ?
                <ScrollView horizontal={ true } >
                    <TouchableOpacity>
                        <Card style={ {...styles.card, ...styles.cardCinema } }>
                            <Image 
                                source={ require('./../assets/images/cinemas/ioi_citymall.png') }
                                style={ styles.cardImageBG }
                            />
                            <View style={ styles.cardImageLayover } ></View>
                            <Text style={ styles.cardCinemaText }>IOI city mall</Text>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Card style={ {...styles.card, ...styles.cardCinema } }>
                            <Image 
                                source={ require('./../assets/images/cinemas/pavilion.png') }
                                style={ styles.cardImageBG }
                            />
                            <View style={ styles.cardImageLayover } ></View>
                            <Text style={ styles.cardCinemaText }>Pavilion</Text>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Card style={ {...styles.card, ...styles.cardCinema } }>
                            <Image 
                                source={ require('./../assets/images/cinemas/sunway.png') }
                                style={ styles.cardImageBG }
                            />
                            <View style={ styles.cardImageLayover } ></View>
                            <Text style={ styles.cardCinemaText }>Sunway</Text>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Card style={ {...styles.card, ...styles.cardCinema } }>
                            <Image 
                                source={ require('./../assets/images/cinemas/klcc.png') }
                                style={ styles.cardImageBG }
                            />
                            <View style={ styles.cardImageLayover } ></View>
                            <Text style={ styles.cardCinemaText }>KLCC</Text>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Card style={ {...styles.card, ...styles.cardCinema } }>
                            <Image 
                                source={ require('./../assets/images/cinemas/alamanda.png') }
                                style={ styles.cardImageBG }
                            />
                            <View style={ styles.cardImageLayover } ></View>
                            <Text style={ styles.cardCinemaText }>Alamanda</Text>
                        </Card>
                    </TouchableOpacity>

                </ScrollView>
                :
                <FlatList 
                    horizontal
                    keyExtractor={ (item, index) => index.toString() }
                    data={ Data.reverse() }
                    renderItem={ (itemData) => {
                        const item = itemData.item;
                        if( item.rating  &&  item.rating !== 'undefined'  ) {
                            return (
                                <TouchableOpacity>
                                    <Card style={ styles.card } onPress={ props.onClick } >
                                        <Image 
                                            source={ item.image }
                                            style={ styles.cardImage }
                                        />

                                        <View style={ styles.cardInfoWrapper }>
                                            <View style={ styles.cardStars }>
                                                { renderStars(item.rating) }
                                            </View>

                                            <Text style={ styles.cardTextSmall }>{ item.category }</Text>

                                            <Text style={ styles.cardText }>{ item.title }</Text>
                                        </View>
                                    </Card> 
                                </TouchableOpacity>
                            )
                        }
                    }} 
                />
            }
            
           

        </View>
    )
};

const styles = StyleSheet.create({
    categoryWrapper: {
        position: "relative",
        alignItems: "flex-start",
        width: "100%",
        padding: 10,
        // borderWidth: 1,
        // borderColor: "#ddd"
    },
    categoryTitle: {
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10,
    },
    card: {
        width: 160,
        padding: 0,
        paddingBottom: 10,
        marginRight: 15,
        marginBottom: 0,
    },
    cardInfoWrapper: {
        paddingBottom: 10,
        paddingRight: 20,
    },
    cardStars: { 
        flexDirection: "row",
        marginVertical: 6,
    },
    cardImage:{
        width: '100%',
        height: 150,
        // marginVertical: 10,
        borderRadius: 15,
    },
    cardTextSmall: {
        fontSize: 10,
        marginVertical: 2,
    },
    cardText: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 6,
    },
    cardCinema: {
        width: 110,
        height: 100,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 0,
        borderRadius: 15,
    },
    cardCinemaText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFF",
        textTransform: "uppercase",
        textAlign: "center",
    },
    cardImageBG:{
        width: "100%",
        maxHeight: 100,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 15,
    },
    cardImageLayover: {
        width: "100%",
        // height: "100%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 15
    },
})
export default Category;
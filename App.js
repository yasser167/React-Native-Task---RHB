import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './compnents/search';
import Header from './compnents/header';
import HomeScreen from './screens/homeScreen';
import Footer from './compnents/footer';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  return (
    <View style={ styles.screen }>
      
      <Header />

      <HomeScreen />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: 'black'
  }
});

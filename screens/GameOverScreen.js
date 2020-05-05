import React from 'react';
import {View,Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <TitleText>THE GAME IS OVER</TitleText>
        <View style={styles.imageContainer}>
           <Image 
                source={require('../assets/success.png')} style={styles.image} />
        </View>
        <View style ={styles.resultContainer}>

                <BodyText style={styles.resultText}>
                    YOUR PHONE NEEDED <Text style={styles.highlight}>{props.userRounds}</Text> ROUNDS TO GUESS THE NUMBER <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
        </View>
        <MainButton  onPress={props.onRestart}>START NEW GAME</MainButton>
    </View>
};

const styles = StyleSheet.create({
    screen : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image : {
        width: '100%',
        height: '100%',
       
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        
    },
    resultContainer: {
       marginHorizontal:20,
       marginVertical:15
    },
    resultText :{
        textAlign:'center',
        fontSize:20
    }
});

export default GameOverScreen;
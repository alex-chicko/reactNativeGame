import React from 'react';
import {View, Text, StyleSheet , TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
 
      return      <TouchableOpacity onPress ={props.onPress} activeOpacity ={0.8}>
                    <View style={styles.button}>
                        <Text style = {styles.buttonText}>{props.children}</Text>
                    </View>
         </TouchableOpacity>
};

const styles = StyleSheet.create({
        button : {
            backgroundColor : Colors.primary,
            paddingVertical : 12,
            paddingHorizontal : 30,
            borderRadius : 30
        },
        buttonText : {
            color : 'white',
            fontFamily : 'open-sans',
            fontSize : 18
        }
});

export default MainButton;
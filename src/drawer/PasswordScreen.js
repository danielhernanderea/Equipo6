
import React, {Component} from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions, Alert} from 'react-native';
import axios from 'axios';
import {CustomHeader} from '../index'
import styles from '../../styles/Styles'
import { IMAGE } from '../constans/Image';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const {width : WIDTH } = Dimensions.get('window')

export class PasswordScreen extends Component{
 
render(){


 
    return (
<SafeAreaView style={{flex: 1}}>
         <CustomHeader title= "Cambio de contraseña" navigation={this.props.navigation}/>
         <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainer}>
      
     
            <View style={{ justifyContent: 'center'}}>
              <Text>Password</Text>

            
  
   
  
           </View>
           </ImageBackground>
      </SafeAreaView>

      
    );
  }
}

import React, {Component} from 'react';
import { Text, SafeAreaView, View, TouchableOpacity,
   Alert, ImageBackground, ScrollView, Image,Linking} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CustomHeader} from '../index'
import styles from '../../styles/Styles';
import { IMAGE } from '../constans/Image';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export class  NotificationsScreen extends Component {
 



  render(){
 
    return (

      
   
        
        
          <SafeAreaView style={{flex: 1}}>
             <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainer}>
         <CustomHeader title= "Notificaciones" navigation={this.props.navigation}/> 
         <ScrollView style={{flex:1}}>
         <View style={{alignItems: 'center', justifyContent: 'center'}}>
       

            

<Text>Notificaiones</Text>

            
          
            </View>
            </ScrollView>
            </ImageBackground>
            </SafeAreaView>
          
     

      
    );
  }
}

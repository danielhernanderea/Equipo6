import React, {Component} from 'react';
import { Text, SafeAreaView, View, FlatList, TouchableOpacity, Alert, ImageBackground, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CustomHeader} from '../index'
import styles from '../../styles/Styles'
import { IMAGE } from '../constans/Image';
import axios from 'axios';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export class UserProfile extends Component {
  
 


render(){

  

 
  
  
    return (

      
      <SafeAreaView style={{flex: 1}}>
         <CustomHeader title= "UserProfile" navigation={this.props.navigation}/>
         <ImageBackground source={IMAGE.FONDO_HOME_FIDE} style= {styles.backgroundContainer}>
            <View style={{ margin:10, width : wp('100%'), justifyContent:"center", alignItems:"center"}}>
                 <Text>User profile</Text>


           </View>
        </ImageBackground>
      </SafeAreaView>

      
    );
  }
}

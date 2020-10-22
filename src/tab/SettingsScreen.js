import  React, { Component} from 'react';
import { Text, View, TouchableOpacity,FlatList, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions} from 'react-native';
import {CustomHeader} from '../index';
import { IMAGE } from '../constans/Image';
import styles from '../../styles/Styles';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export class SettingsScreen extends Component {

    

  render(){
    
    return(
           
  
      <SafeAreaView style={{flex: 1}}>
    <CustomHeader title= "Settings" isHome={true} navigation={this.props.navigation}/>
         <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainer}>
       <View>
            <Text>SETTINGS SCREEN</Text>
       </View>
         </ImageBackground>
    </SafeAreaView>
    
  );


  }
  }

  
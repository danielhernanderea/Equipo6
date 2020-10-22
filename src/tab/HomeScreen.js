import  React, { useState, useEffect} from 'react'
import { Text, View, TouchableOpacity , SafeAreaView, ImageBackground, FlatList, Image, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../styles/Styles'
import {CustomHeader} from '../index'
import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

import { IMAGE } from '../constans/Image';
import { color } from 'react-native-reanimated';

import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';



var width = Dimensions.get('window').width;




export function  HomeScreen({navigation}){ 

    
  
   

 

  



   return(


     <SafeAreaView style={{flex: 1}}>
     <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainerHome}>
     <CustomHeader title= "Home" isHome={true} navigation={navigation}/>


     <View style={{flex: 1, alignItems: 'center'}}>
          <Text>HOME SCREEN</Text>
            
          </View>
    


      
     
    </ImageBackground>
    </SafeAreaView>



     
   )
   
  
  }
  

 
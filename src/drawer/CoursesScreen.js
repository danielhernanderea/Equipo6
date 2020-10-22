

import  React, { useState, useEffect} from 'react'
import { Text,
         SafeAreaView, 
         View,
         TouchableOpacity,
         Alert,
        ImageBackground,
        FlatList,
        Image
      } from 'react-native';
import {CustomHeader} from '../index'
import styles from '../../styles/Styles'
import axios from 'axios';
import { IMAGE } from '../constans/Image';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';



export function CoursesScreen({navigation}) {

   
 
 
    return (

      
      <SafeAreaView style={{flex: 1}}>
           <CustomHeader title= "Courses" navigation={navigation}/>
         <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainerHome}>
          <View>
            <Text>NOtification screen</Text>
          </View>





        </ImageBackground>
        </SafeAreaView>

      
    );
  
}









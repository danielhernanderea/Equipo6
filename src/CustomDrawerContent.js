import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {IMAGE} from './constans/Image'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../styles/Styles';

import {widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export class  CustomDrawerContent extends Component {

  removeIDstorage = async(key) =>{
    try {
      await AsyncStorage.removeItem(key);
      console.log("Se elimino con exito el id y userType");
      
      this.props.navigation.navigate('Login');
    }catch(error){
      console.log("Hubo un error eliminando el id"+ error);
      
    }
    
  };
  
  removeStorage = () =>{
  
   this.removeIDstorage("Login");
   
  }

render(){


    return(

      <View style={{backgroundColor:"#F6F6F6", flex:1, justifyContent:"center", alignItems:"center"}}>

          <SafeAreaView style={{flex: 1}}>
          <View style={{height:150, alignItems:'center', justifyContent: 'center'}}>
           
           

        </View>


        <ScrollView style={{marginLeft: 20}}>
    
             <TouchableOpacity
                  style={{marginTop:40, marginLeft: 1}}
                  onPress={()=> this.props.navigation.navigate('MenuTab')}
             >

                 <View style={{flex: 1, flexDirection: 'row'}}>
                      <Image source={IMAGE.ICON_HOME_BLACK}
                            style={{height:19, width: 19}}
                          />

                      <Text style={{marginLeft:15,  fontSize:18}}> INICIO </Text>
                  </View>   
             </TouchableOpacity>
  

              <TouchableOpacity
                 style={{marginTop:20, marginLeft: 1}}
                 onPress={()=> this.props.navigation.navigate('Notifications')}
               >
                 <View style={{flex: 1, flexDirection: 'row',alignItems:"center"}}>
                      <Image source={IMAGE.ICON_SETTINGS_BLACK}
                            style={{height:22, width: 22}}
                          />
                      <View style={{flexDirection:"column"}}>
                         <Text style={{marginLeft:15, fontSize:18}}>TÉRMINOS Y </Text>
                         <Text style={{marginLeft:15, fontSize:18}}> CONDICIONES</Text>
                     </View>                
                </View>
               </TouchableOpacity>

              
              


             

               <View style={{borderTopWidth:3, borderTopColor:"#92BA41"}} />



<TouchableOpacity
   style={{marginTop:20, marginLeft: 1}}
   onPress={ ()=>this.removeStorage()}
 >
 <View style={{flex: 1, flexDirection: 'row'}}>

      <Image source={IMAGE.ICON_LOGOUT}
             style={{height:19, width: 19}}
           />
      <Text style={{marginLeft:15, fontSize:18}}>CERRAR SESIÓN</Text>
 </View>
</TouchableOpacity>

        </ScrollView>
          </SafeAreaView>

   </View>
     
   
    );
}
  
}

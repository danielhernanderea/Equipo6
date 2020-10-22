import React, {Component} from 'react';
import { Text, View, Image, 
         TouchableOpacity, 
         ImageBackground,
         TextInput,
         Alert,
         Modal,
        TouchableHighlight,
        } from 'react-native';


import styles from '../../styles/Styles';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { IMAGE } from '../constans/Image';
import NetInfo from "@react-native-community/netinfo";
import {widthPercentageToDP as wp,
        heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { SafeAreaView } from 'react-native-safe-area-context';


export class  LoginScreen extends React.Component {

  constructor(props){
    super(props);
   
    this.state= {
      email: "",
      password: ""
    
     
    };
  
  }

 

  ChangeModalVisibility = b=>  this.setState({isModalVisible:  b});
  ChangeTextModal = text => this.setState({textModal: text});
  onChangeEmail = email => this.setState({email});
  onChangePassword = password => this.setState({password});




onSubmit = async () =>{
    
  const {email, password} = this.state;

  console.log(email)
  console.log(password)

if(email.length>0 && password.length>0)
{
  try{


 await   fetch('http://localhost:3000/Login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((response) => response.json()).then((json) => {
     console.log(json)
      if (json.status == 200){
        console.log(json)
        this.props.navigation.navigate('HomeApp') 
        Alert.alert(json.message)
      }else{
        Alert.alert(' Informacion de acceso incorrecta ')
       console.log("info incorrecta de aceso")
      
  }
    })
    //++++++++++++++++


     
    

  }catch(error){
    console.log("hay un error: "+error)
    Alert.alert("Hubo un error. Intentelo más tarde.")
   
  }
}else{
  console.log("no pudo entrar a mifuncion de la peticion");
  Alert.alert("POR FAVOR LLENA TODOS LOS CAMPOS")
}
};







  render(){
 


       return (
       
       <SafeAreaView style={{flex:1}} >
       <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainer}>
       <View style={{  alignItems:"center",width:wp('100%'), height: hp('100%'), justifyContent: "center"
                        
                       }}>
       
          
                   
                    

                <View style = {styles.inputContainer}>
                   <Image source ={IMAGE.ICON_LOGIN_USUARIO} style = {styles.inputIcon}/>
                   <TextInput
                     style={styles.input}
                     placeholder={'CORREO ELECTRÓNICO jaja'}
                     placeholderTextColor={'#6f6f6e'}
                     underlineColorAndroid = 'transparent'
                     onChangeText={this.onChangeEmail} 
                     autoCapitalize= 'none'
                     
               
                   />
                </View>

              
                <View style = {styles.inputContainer}>
                   <Image source ={IMAGE.ICON_LOGIN_PASSWORD} style = {styles.inputIcon}/>
                     <TextInput
                         style={styles.input}
                         placeholder={'CONTRASEÑA'}
                          secureTextEntry = {true}
                         placeholderTextColor=  '#6f6f6e' 
                         underlineColorAndroid = 'transparent'
                         onChangeText={this.onChangePassword} 
                         autoCapitalize= 'none'
                        
                      />
                   
                </View>
    
              
             <TouchableOpacity style = {styles.botonLogin}
                                //  onPress={this.onSubmit}
                                onPress={() => 
                                this.onSubmit()}
              >
                   <Text style={styles.text}>ENTRAR</Text>
              </TouchableOpacity>
                
    
              <TouchableOpacity  style = {styles.botonLoginRegistro}
                                 onPress={()=> this.props.navigation.navigate('Register')}
              >
                   <Text style={styles.text}>REGISTRARSE</Text>
              </TouchableOpacity>
            
              




    






 
        </View>
        </ImageBackground>
        </SafeAreaView>
    
     
 
       )
    } 
  }
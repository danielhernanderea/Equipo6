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
      password: "",
      isModalVisible: false,
      textModal: "" 
     
    };
  
  }

 

  componentDidMount(){
   
 
  

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Is connected?", state.isConnected);
      if(state.isConnected){
        console.log("SÍ ESTÁ CONECTADO A INTERENET")
      }else{
        console.log("NO ESTÁ CONECTADO A INTERENET")
        Alert.alert("No está conectado a internet, se necesita conexión para que la app funcione")
      }
    });

    return () =>{
      unsubscribe();
    }
    
    
  }


  
  
 setIDstorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(
       key,
       JSON.stringify(value)
      );
      console.log(" guardando el id y el usertype");
    } catch (error) {
      console.log("Hubo un error al guadar la data"+ error);
    }
    
  };

  saveStorage = ( ID, USERTYPE) =>{
    this.setIDstorage("Login",{ id : ID, userType: USERTYPE})
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
        var resultAPI = await axios.get(''
         ).then(response =>{
               
                
                  let result2 = response.data;
                  console.log(result2)
                
                  
                  if(result2.success){
                   
                      
                        
                        console.log(result2);
                        let name = result2.name
                        let idUsuario= result2.id
                        let userType = result2.userType
                        this.saveStorage(idUsuario, userType)
                        console.log("Guardando el id y el usertype: "+idUsuario+"usertype : "+userType)
                    
                       // this.props.navigation.navigate('HomeApp') 
                        Alert.alert(' BIENVENIDO '+ name)
                      
                       
                  }else{
                         Alert.alert(' Informacion de acceso incorrecta ')
                        console.log("info incorrecta de aceso")
                       
                   }
        });
      

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
                     placeholder={'CORREO ELECTRÓNICO'}
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
                                  this.props.navigation.navigate('HomeApp') }
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
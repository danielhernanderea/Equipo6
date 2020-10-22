
import React, {Component} from 'react'
import { Text, View , SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import styles from '../../styles/Styles';
import axios from 'axios';
import { IMAGE } from '../constans/Image';
import {CustomHeader} from '../index'
import { ScrollView } from 'react-native-gesture-handler';


export class RegisterScreen extends Component{

  constructor(props){
    super(props);
   
    this.state= {
    name:"",
    apPat: "",
    apMat: "",
    dateB: "",
    password: "",
    repPassword: "",
    email: "",
    date : "2016-05-15"
  }


}



onChangeEmail = email => this.setState({email});
onChangePassword = password => this.setState({password});


  onPressRegister = async () =>{
    
    const {email, password, name} = this.state;
    console.log("datos de registro:")
    console.log("email:"+email)
    console.log("contraseña: "+ password)
 


if(password == repPassword){
  if(email.length>0 && password.length>0 && name.length>0 && apPat.length>0 && apMat.length>0 && curp.length>0 && dateB.length>0)
  {
    try{
        var resultAPI = await axios.get(''
         ).then(response =>{
               
                 
                  let result2 = response.data;
                
                
                  console.log(result2)
                  if(result2.success){
                   
                      
                        
                        console.log(result2);
                    
                      //  this.props.navigation.navigate('HomeApp') 
                        Alert.alert(' REGISTRO EXITOSO ')
                      
                       
                  }else{
                         Alert.alert(' Informacion  incorrecta ')
                        console.log("información incorrecta")
                       
                   }
        });
      

    }catch(error){
      console.log("hay un error: "+error)
      Alert.alert("Hubo un error. Intentelo mas tarde.")
     
    }
  }else{
    console.log("no pudo entrar a mifuncion de la peticion");
    Alert.alert("POR FAVOR LLENA TODOS LOS CAMPOS")
  }

}else{
  Alert.alert("Verifica que escribiste bien dos veces tu contraseÃ±a")
}



}

render(){
  
    return (
     
        <SafeAreaView style={{flex: 1}}>
           <CustomHeader title= "Registro" navigation={this.props.navigation}/>
          <ImageBackground source={IMAGE.MI_FONDO} style= {styles.backgroundContainer}>
        <ScrollView style={{flex:1}}>
          <View style={{justifyContent:'center',  alignContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:22,  marginTop:20, color: 'white', fontWeight: 'bold'}}> BIENVENIDO,</Text>
          <Text style={{fontSize:22, marginBottom: 5, color: 'white', fontWeight: 'bold'}}> REGISTRATE AQUÍ</Text>
          
          
          </View>
         
    
          <View style = {styles.inputContainer}>
          <TextInput
                     style={styles.input}
                     placeholder={'NOMBRE(S)'}
                     placeholderTextColor={ '#6f6f6e'}
                     underlineColorAndroid = 'transparent'
                     onChangeText={this.onChangeName}
               
          />
          
          
          
          </View>



          <View style = {styles.inputContainer}>
              <TextInput
                     style={styles.input}
                     placeholder={'CORREO ELECTRÓNICO'}
                     placeholderTextColor={ '#6f6f6e'}
                     underlineColorAndroid = 'transparent'
                     autoCapitalize= 'none'
               onChangeText={this.onChangeEmail}
            />
         </View>


         <View style = {styles.inputContainer}>
           <TextInput
                     style={styles.input}
                     placeholder={'CONTRASEÑA'}
                     placeholderTextColor={ '#6f6f6e'}
                     underlineColorAndroid = 'transparent'
                     secureTextEntry={true}
                     autoCapitalize= 'none'
                     onChangeText={this.onChangePassword}
               
          />
          </View>


        



          <TouchableOpacity
                     style = {styles.botonLogin}
                     onPress={this.onPressRegister}
          >
                   
                    <Text style={styles.text}>REGISTRARME</Text>
            </TouchableOpacity>




    
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>

    );
  }
}

  
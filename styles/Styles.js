import React from 'react';
import { StyleSheet, Dimensions,} from 'react-native';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp, 
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

const {width : WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({

    welcome: {
      fontSize : 28,
      textAlign : 'center'
      
    
    },
    backgroundContainer:{
       flex :1,
       width: null,
       height: null
    
    },
    backgroundContainerHome:{
      flex :1,
      width : null,
      height: null,
   
   },
  
    logoContainer:{
       alignItems: 'center',
       opacity : 0.9
    },
    logo:{
      // width: 370, 
      // height: 200,
       height: hp('20%'),
       marginBottom:30,
       justifyContent: "center",
       alignItems: "center",
       width : wp('90%'), 
       resizeMode: "stretch"
    
       
    },
    logoText :{
      color: 'white',
      fontSize: 22,
      fontWeight : '500',
      marginTop : 10,
      opacity : 0.9
    
    },
    inputContainer:{
     // width : WIDTH -55,
      //height : 45,
      width:wp('84.5%') , height: 45,
      borderRadius : 5,
      marginTop: 10,
      marginHorizontal :25,
      backgroundColor : '#F5F5F5'
      
    },
    input :{
    // width : WIDTH -55,
    // height : 45,
      width:wp('84.5%') , 
      height:45,
      borderRadius : 5,
      fontSize : 16,
      paddingLeft: 25,
      color : '#1C2447',
      marginHorizontal :25
        
    },
    botonLogin:{
      marginTop: 40,
      width : wp('85%'),
      height : 45,
      borderRadius : 5,
      backgroundColor : '#92BA41',
      justifyContent : 'center',
      marginHorizontal :25,
      marginBottom:30
    },
    botonLoginRegistro:{
      marginTop: 10,
      width : wp('85%'),
      height : 45,
      borderRadius : 5,
      backgroundColor : '#09637C',
      justifyContent : 'center',
      marginHorizontal :25
    },
    botonPedirServicio:{
      marginTop: 22,
      width : wp('85%'),
      height : 45,
      borderRadius : 5,
      backgroundColor : '#92BA41',
      justifyContent : 'center',
      marginHorizontal :25,
      alignItems: "center"
    },
    text :{
      color : '#fff',
      fontSize : 20,
      textAlign : 'center'
    },
  
  
  
 button: {
      borderColor: "#E9D1F1",
      borderWidth: 1,
      borderRadius: 10 
  },
  buttonPress: {
      width: 300,
      height:50,
      borderColor: "#fff",
      backgroundColor: "#B228E0",
      borderWidth: 4,
      borderRadius: 10,
      alignItems : 'center',
      textAlign : 'center',
      fontSize : 22,
      justifyContent: 'center'
  },
  textoBoton:{
    color : '#fff'
  },
  loginView:{
    width:wp('100%') , height:hp('100%'),
    justifyContent: 'center', 
    alignItems: 'center'
   
  },
   contenedor:{
  
      flex : 1,
      alignItems: 'center',
      justifyContent : 'center'
    },
    profileImage:{
      width: wp('29%'),
      height: 125,
      borderRadius: 100,
      shadowColor: '#09637C',
      marginBottom:10,
      marginTop: 20,
      marginLeft:5,
      marginRight:15,
      borderColor: "#09637C",
      borderWidth: 4
    },
    infoContainer:{
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 30

    },
    textUserName:{
   
      fontSize: 24,
      color: '#1D1D1B',
      fontWeight :"bold",
      textAlign: "left",
      justifyContent: "center",
      marginTop:15,
      marginBottom:15,
      marginRight:15,
      paddingRight:15,
      paddingLeft:5
    },
    textUserEmail:{
      fontSize: 18,
      color: '#1e2b33',
      textAlign: "center",
      justifyContent: "center"
    },
    passForgot:{
      color : '#1e2b33',
      fontSize : 18,
      textAlign : 'center',
      marginTop: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },



    modalView: {
      marginTop: 30,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      width: wp('85%'),
      height: 300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    centeredView: {
      flex :1,
      justifyContent: "center",
      alignItems: "center",
     marginTop: 20
    
    },
    botonModalAceptar:{
      marginTop: 10,
      height : 46,
      width: wp('30%'),
      borderRadius : 5,
      backgroundColor : '#92BA41',
      justifyContent : 'center',
      marginHorizontal :15
    },
    botonModalCancelar:{
      marginTop: 10,
      height : 45,
      width: wp('30%'),
      borderRadius : 5,
      backgroundColor : '#09637C',
      justifyContent : 'center',
      marginHorizontal :15
    },
    inputIcon:{
      position: "absolute",
      top: wp('2%'),
      left: hp('2%')
     // top: 10,
      //left: 15
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      fontSize: 22
    },
    directionStyle:{
      fontSize:18,
      color: '#1e2b33',
      marginTop:5,
      alignContent: 'center',
      fontWeight:"bold",
      textAlign : "left"
    

    },
    botonHomeDetail:{
      marginTop: 20,
      marginBottom: 10,
      width : WIDTH*0.80,
      height : 45,
      borderRadius : 2,
      backgroundColor : '#F27F00',
      justifyContent : 'center',
      marginHorizontal :25

      
    },
    backgroundContainerINICIO:{
      flex :1,
      width : 400,
      height: 390,
      justifyContent :'center',
      alignItems : 'center',
   },
   studentImage:{
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    alignSelf: "center", 
    justifyContent: "center"
  },
  botonConstancias:{
    marginTop: 20,
    marginBottom: 10,
    width : 200,
    height : 35,
    borderRadius : 5,
    backgroundColor : '#2C6070',
    justifyContent : 'center',
    marginHorizontal :25
  }
    
    
  });
   
  


  export default styles;
  

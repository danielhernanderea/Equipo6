/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import  React, { useState, useEffect} from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler'


import styles from './styles/Styles'



import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen, SettingsScreen } from './src/tab'
import {NotificationsScreen, UserProfile, CoursesScreen, PasswordScreen} from './src/drawer'
import {RegisterScreen, LoginScreen} from './src/auth' 
import { IMAGE } from './src/constans/Image'


const Stack2 = createStackNavigator();

function MyStack() {
  return (
    <Stack2.Navigator >
     
      <Stack2.Screen name= "Password" component={PasswordScreen}  options={NavOptionHandler}/>
     
    </Stack2.Navigator>
  );
}





const Tab = createBottomTabNavigator();

const NavOptionHandler = () =>({

  headerShown: false

})







const StackHome = createStackNavigator();

function HomeStack(){

  return(
    
  
    <StackHome.Navigator initialRouteName="Home">
       <StackHome.Screen name="Home" component={HomeScreen} options={NavOptionHandler} />
      
    </StackHome.Navigator>
  );
  

}

const StackSetting = createStackNavigator();


function SettingsStack(){

  return(
    <StackSetting.Navigator initialRouteName="Setting">
       <StackSetting.Screen name="Setting" component={SettingsScreen} options={NavOptionHandler}/>

    </StackSetting.Navigator>
  );

}



function TabNavigator(){
  
  return(
   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME_FIDE
              : IMAGE.ICON_HOME_FIDE
          } else if (route.name === 'Settings') {
            iconName = focused 
            ? IMAGE.ICON_TELEFONO_FIDE
            : IMAGE.ICON_TELEFONO_FIDE
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{width:20, height:20}} resizeMode='contain'/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
  
  );
}



const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation, route}){
  
    return(
         <Drawer.Navigator 
            initialRouteName="MenuTab"
            drawerContent={() => <CustomDrawerContent navigation ={navigation}/>}>
               <Drawer.Screen  name="MenuTab" component={TabNavigator}/>
               <Drawer.Screen  name="Notifications" component={NotificationsScreen}  />
            
             
             
         </Drawer.Navigator>
    );
  }

const StackApp = createStackNavigator();

export default function App() {
  return ( 
    
    
    
   
    <NavigationContainer>
     
    <StackApp.Navigator
        initialRouteName="Login"

        screenOptions = {{
          headerStyle:{
            backgroundColor : '#437AAD',
          },
          headerTintColor : '#fff',
          headerTitleStyle : {
            fontWeight: 'bold'
          }
          }}
        >
             <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={NavOptionHandler}/>
             <StackApp.Screen name="Login" component={LoginScreen} options={NavOptionHandler}/>
             <StackApp.Screen name="Register" component={RegisterScreen} options={NavOptionHandler}/>
             
        
         </StackApp.Navigator>

  
   
    </NavigationContainer>
  
    
  );
}
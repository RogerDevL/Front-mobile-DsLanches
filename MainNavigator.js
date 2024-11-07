import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Sobre from './src/Pages/Sobre';
import Home from './src/Pages/Home';
import Contato from './src/Pages/Contato';
import Inicial from './src/Pages/Inicial';
 
 
 
const Stack = createNativeStackNavigator();
 
export default function MainNavigator() {
  return (
    <NavigationContainer initialRoutename="Home">
        <Stack.Navigator>
            <Stack.Screen name='Inicial' component={Inicial} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Contato' component={Contato} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Juego from './src/components/Juego';
import Seleccion from './src/components/Seleccion';

const Stack=createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Seleccion'>
        <Stack.Screen name='Seleccion'component={Seleccion}/>
        <Stack.Screen name='Juego'component={Juego}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


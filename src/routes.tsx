import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationConfig } from '@react-navigation/native-stack/lib/typescript/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import React from 'react';
import Main from './pages/Main';
import Rest from './pages/Rest';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
         options={{ 
           tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color}/>
          }} 
         name="Inicio" 
         component={Main} 
        />
        <Tab.Screen 
         options={{ 
           tabBarIcon: ({ color }) => <Feather name="search" size={20} color={color}/>
          }}
         name="Busca" 
         component={Main} 
        />
        <Tab.Screen 
         options={{ 
           tabBarIcon: ({ color }) => <Feather name="inbox" size={20} color={color}/>
          }} 
         name="Pedidos" 
         component={Rest} 
        />
        <Tab.Screen 
         options={{ 
           tabBarIcon: ({ color }) => <Feather name="user" size={20} color={color}/>
          }} 
         name="Perfil" 
         component={Main} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  ); 
}
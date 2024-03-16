import React, { useContext, useEffect, useState } from 'react';
import Welcome from './components/Welcome'
import Registrate from './components/Registrate'
import Login from './components/Login'
import Reset from './components/Reset'
import Profile from './components/Profile'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
        <Stack.Navigator
         screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen
               name="Welcome" 
               component={Welcome}
               options={{title: 'Добро пожаловать'}}
            />
            <Stack.Screen
               name="Registrate" 
               component={Registrate}
               options={{title: 'Регистрация'}}
            />
            <Stack.Screen
               name="Login" 
               component={Login}
               options={{title: 'Авторизация'}}
            />
            <Stack.Screen
               name="Reset" 
               component={Reset}
               options={{title: 'Сброс пароля'}}
            />
            <Stack.Screen
               name="Profile" 
               component={Profile}
               options={{title: 'Профиль'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
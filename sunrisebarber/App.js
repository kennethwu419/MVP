/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLogin from './AppLogin.js';
import AppHome from './AppHome.js';
import AppCalendar from './AppCalendar.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="login"
          component={AppLogin}
        />
        <Stack.Screen
          name="home"
          component={AppHome}
        />
        <Stack.Screen
          name="calendar"
          component={AppCalendar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

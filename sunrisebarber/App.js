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
import AppConfirmation from './AppConfirmation.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true
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
        <Stack.Screen
          name="confirmation"
          component={AppConfirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

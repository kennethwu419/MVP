/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLogin from './AppLogin.js';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppLogin />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E95515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lowerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 5
  },
  input: {
    height: 40,
    margin: 5,
    width: 180,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 180,
    borderWidth: 1,
  },
});

export default App;

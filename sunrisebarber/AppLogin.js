import React, { useState } from 'react';
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

const AppLogin = ({ navigation }) => {
  const [userInput, setUserInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={{width: 150, height: 150}}
      />
      <Text style={styles.baseText}>
        SUNRISE BARBER© 2022
      </Text>
      <Text style={styles.lowerText}>
        TAIPEI, TAIWAN
      </Text>
      <TextInput
        style={styles.input}
        placeholder='email'
        value={userInput}
        onChangeText={setUserInput}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        value={passwordInput}
        onChangeText={setPasswordInput}
      />
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('home')}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: 'white', marginTop: 10, fontWeight: 'bold' }}>
          SIGN-UP
        </Text>
      </TouchableOpacity>
    </View>
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

export default AppLogin;
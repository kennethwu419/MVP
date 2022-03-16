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
  TextInput,
  Platform,
  Button,
  LogBox
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AppConfirmation = ({ navigation, route}) => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo-white.png')}
        style={{
          width: 150,
          height: 150,
          alignSelf: 'center',
          marginTop: 100
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          color: '#757677'
        }}
      >
        Confirmed
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 12,
          marginTop: 5,
          color: '#757677',
          marginBottom: 20
        }}
      >
        See you soon
      </Text>
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677',
          marginTop: 30
        }}
      >
        {route.params.date()}
      </Text>
      <Text
        style={{
          fontSize: 35,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        @
      </Text>
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        {route.params.time()}
      </Text>
      <Image
        source={require('./assets/qrcode.png')}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 20
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 180,
    borderWidth: 0,
    borderRadius: 10
  },
  confirmButton: {
    alignSelf: 'center',
    backgroundColor: '#E95515',
    padding: 10,
    marginBottom: 10,
    marginTop: 80,
    width: 280,
    borderWidth: 0,
    borderRadius: 10
  },
});

export default AppConfirmation;
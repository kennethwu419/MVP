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

const AppHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo-white.png')}
        style={{width: 150, height: 150, alignSelf: 'center', marginTop: 100}}
      />
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          color: '#757677'
        }}
      >
        Select Barber
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 12,
          marginTop: 5,
          color: '#757677'
        }}
      >
        Check the availability of your preferred barber
      </Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('select')}>
          <Image
            source={require('./assets/barber1.png')}
            style={{
              borderWidth: 0.5,
              width: 150,
              height: 200,
              marginLeft: 20,
              marginRight: 5,
              marginTop: 0
            }}
          />
        </TouchableOpacity>
        <Image
          source={require('./assets/barber2.png')}
          style={{
            borderWidth: 0.5,
            width: 150,
            height: 200,
            marginLeft: 5,
            marginRight: 20,
            marginTop: 0
          }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/barber3.png')}
          style={{
            borderWidth: 0.5,
            width: 150,
            height: 200,
            marginLeft: 20,
            marginRight: 5,
            marginBottom: 115,
          }}
        />
        <Image
          source={require('./assets/barber4.png')}
          style={{
            borderWidth: 0.5,
            width: 150,
            height: 200,
            marginLeft: 5,
            marginRight: 20,
            marginBottom: 115,
          }}
        />
      </View>
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
});

export default AppHome;
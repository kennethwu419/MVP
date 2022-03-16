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
} from 'react-native';

const AppCalendar = () => {
  const [show, setShow] = useState(false);
  const showMode = () => {
    setShow(true);
  }
  const hideMode = () => {
    setShow(false);
  }
  const handleConfirm = () => {
    hideMode();
  }

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
        Quick Booking
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 12,
          marginTop: 5,
          color: '#757677',
          marginBottom: 100
        }}
      >
        Select your preferred date+time
      </Text>
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

export default AppCalendar;
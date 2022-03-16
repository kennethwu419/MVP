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
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AppCalendar = () => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState('');

  const showMode = () => {
    setShow(true);
  }
  const hideMode = () => {
    setShow(false);
  }
  const handleConfirm = (date) => {
    setDate(date);
    hideMode();
  }
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    console.log('this is date obj', tempDate);
    return date !== ''
    ? `${tempDate[1]}-${tempDate[2]}-${tempDate[3]}`
    : '';
  }
  const getTime = () => {
    let tempDate = date.toString().split(' ');
    console.log('this is date obj', tempDate);
    return date !== ''
    ? `${tempDate[4]}`
    : '';
  }

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
      <Button
        title='Date'
        onPress={() => {
          showMode();
          setMode('date');
        }}
      />
      <Button
        title='Time'
        onPress={() => {
          showMode();
          setMode('time');
        }}
      />
      <DateTimePickerModal
        isVisible={show}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideMode}
        is24Hour={false}
      />
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        {getDate()}
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        @
      </Text>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        {getTime()}
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
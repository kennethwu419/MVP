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

const AppCalendar = ({ navigation }) => {
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
    return date !== ''
    ? `${tempDate[1]}-${tempDate[2]}-${tempDate[3]}`
    : '';
  }
  const getTime = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
    ? `${tempDate[4].slice(0, 5)}`
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
          marginBottom: 50
        }}
      >
        Select your preferred date+time
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}
          onPress={() => {
            showMode();
            setMode('date');
          }}
        >
          Date
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}
          onPress={() => {
            showMode();
            setMode('time');
          }}
        >
          Time
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={show}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideMode}
        is24Hour={false}
      />
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677',
          marginTop: 30
        }}
      >
        {getDate()}
      </Text>
      <Text
        style={{
          fontSize: 35,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        {date === '' ? '' : '@'}
      </Text>
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#757677'
        }}
      >
        {getTime()}
      </Text>
      <TouchableOpacity style={styles.confirmButton}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}
          onPress={() => navigation.navigate('confirmation',
          {
            date: getDate,
            time: getTime
          })}
        >
          Confirm
        </Text>
      </TouchableOpacity>
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

export default AppCalendar;
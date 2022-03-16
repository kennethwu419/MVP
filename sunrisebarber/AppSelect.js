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
import DateTimePicker from '@react-native-community/datetimepicker';

const AppSelect = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
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
          color: '#757677'
        }}
      >
        Select your preferred date+time
      </Text>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 10}}>
          {text}
        </Text>
        <Button
          title='Select Date'
          onPress={() => showMode('date')}
        />
        <Button
          title='Select Time'
          onPress={() => showMode('time')}
        />
      </View>
      {show && (
        <DateTimePicker
          testId='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={false}
          display='default '
          onChange={onChange}
        />
      )}
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

export default AppSelect;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')}
       style={{width: 150, height: 150}} />
      <Text style={styles.baseText}>SUNRISE BARBER© 2022</Text>
      <Text style={styles.lowerText}>TAIPEI, TAIWAN</Text>
      <hr/>
      <form>
        <input type='text' value='' placeholder='email'/>
      </form>
      <hr/>
      <form>
        <input type='text' value=''placeholder='password'/>
      </form>
      <hr/>
      <form>
        <input type='submit' value='login'/>
      </form>
      <TouchableOpacity>
        <Text style={{ color: 'blue', fontSize: 10 }}>
          sign-up
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
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
  }
});
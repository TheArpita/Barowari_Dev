import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import {setupURLPolyfill} from 'react-native-url-polyfill';
import {Provider} from 'react-redux';

import { store } from './src/features/store';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import ChequeScreen from './src/screens/ChequeScreen';
import introduction from './src/screens/introduction';
import OTPScreen from './src/screens/OTPScreen';
import UserNameScreen from './src/screens/UserName';
import TabViewScreen from './src/screens/TabViewPage';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


if (Platform.OS !== 'web') setupURLPolyfill();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='intro' component={introduction}></Stack.Screen>
          <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
          <Stack.Screen name='otp' component={OTPScreen}></Stack.Screen>
          <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
          <Stack.Screen name='cheque' component={ChequeScreen}></Stack.Screen>
          <Stack.Screen name='name' component={UserNameScreen}></Stack.Screen>
          <Stack.Screen name='tabView' component={TabViewScreen}></Stack.Screen>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Barowari app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

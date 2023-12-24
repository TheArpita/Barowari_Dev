import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

export default Login = ({navigation, route}) => {
  const { phoneNo } = route.params;
  const [userName, setUserName] = useState('');

  const handleNameChange = (text) => {
    setUserName(text);
  };

  const handleSubmit = () => {

    var formdata = new FormData();
    formdata.append("phnumber", phoneNo);
    formdata.append("fullname", userName);

    var requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formdata,
      // redirect: "follow",
    };

    fetch("https://barowari.com/beta/Api/registation", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        async () => await AsyncStorage.setItem('currentUserName', userName);
        navigation.navigate('cheque');
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/web/component_134_1.png')} style={styles.logo} />
      <Text style={styles.heading}>WELCOME</Text>
      <Text style={styles.heading}>to Barowari Community</Text>
      <View style={styles.inputView}>
        <Text style={styles.info}>Just one step more to create your profile</Text>
        <Text style={styles.heading}>Please tell us your name</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your full name"
          onChangeText={handleNameChange}
        />        
      </View>
      <TouchableOpacity
        style={userName !== '' ? styles.submitButton : styles.submitButtonDisabled}
        onPress={handleSubmit}
        disabled={userName == ''}
      >
        <Text style={styles.submitButtonText}>Create Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 50
    // marginBottom: 40,
  },
  inputView: {
    width: '80%',
    marginBottom: 0,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  inputText: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  info: {
    color: 'gray',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    // borderRadius: 25,
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
    // borderRadius: 25,
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tnc: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  tncText: {
    color: 'gray',
  },
  tncLink: {
    color: 'blue',
    marginLeft: 5,
  },
});
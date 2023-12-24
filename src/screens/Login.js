import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import SmsListener from 'react-native-android-sms-listener';

export default Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp_api, setOtp_api] = useState(null);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (text) => {
    if (text.length === 10) {
      setPhoneNumber(text);
      setError('');
    } else {
      setPhoneNumber('');
      setError('Please enter a valid 10 digit phone number.');
    }
  };

  const handleSubmit = () => {
    if (phoneNumber.length === 10) {
      // Send OTP to the given phone number
      // Redirect to OTP submission page

      // var myHeaders = new Headers();
      // myHeaders.append("Cookie", "ci_session=3796f10c20c7ab4353a051478609441be99f0c58");

      var formdata = new FormData();
      formdata.append("phnumber", phoneNumber);

      var requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: formdata,
        // redirect: 'follow'
      };

      fetch("https://barowari.com/beta/Api/sendotp", requestOptions)
        .then(response => response.text())
        // .then(result => result.data)
        .then(data => {
          setOtp_api(data?.otp);
          (phoneNumber!=data?.phonenumber) && setPhoneNumber(data.phonenumber || '');
          navigation.navigate('otp', {phoneNo: phoneNumber, otp_api});
        })
        .catch(error => console.log('error', error));


      
      // setOtpSent(true);
      // SmsListener.addListener((message) => {
      //   if (message.originatingAddress === 'OTP') {
      //     const otpRegex = /(\d{6})/;
      //     const extractedOtp = message.body.match(otpRegex);
      //     if (extractedOtp) {
      //       setOtp(extractedOtp[0]);
      //     }
      //   }
      // });
    } else {
      setError('Please enter a valid 10 digit phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/web/component_134_1.png')} style={styles.logo} />
      <View style={styles.inputView}>
        <Text style={styles.heading}>Login to your account</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your 10 digit mobile number"
          keyboardType="numeric"
          maxLength={10}
          onChangeText={handlePhoneNumberChange}
        />
        {error &&<Text style={styles.error}>{error}</Text>}
        <Text style={styles.info}>We will send an OTP to this phone number</Text>
      </View>
      <TouchableOpacity
        style={phoneNumber.length === 10 ? styles.submitButton : styles.submitButtonDisabled}
        onPress={handleSubmit}
        disabled={phoneNumber.length !== 10}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.tnc}>
      <Text style={styles.tncText}>By continuing, you agree to our</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://barowari.in/index.php/terms-conditions')}>
          <Text style={styles.tncLink}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
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


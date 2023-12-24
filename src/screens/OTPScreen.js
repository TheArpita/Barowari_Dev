import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";

export default OTPPage = ({ navigation, route }) => {
  const { phoneNo, otp_api } = route.params;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(25);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState([false, false, false, false]);

  //   const otpLength = 4;

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(25);
    setResendDisabled(true);
  };

  const handleVerify = () => {
    // Handle the verification logic here
    // var myHeaders = new Headers();
    // myHeaders.append(
    //   "Cookie",
    //   "ci_session=e7b0b4c9afd2dcda82d039edc2c6a983b1156a37"
    // );

    var formdata = new FormData();
    formdata.append("phnumber", phoneNo);
    formdata.append("otp", otp_api);
    const str_otp = otp.toString().replace(/,/g, '');
    formdata.append("otpreceive", str_otp);

    var requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formdata,
      // redirect: "follow",
    };

    fetch("https://barowari.com/Api/otpverifylogin", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        navigation.navigate("name", {phoneNo});
      })
      .catch((error) => console.log("error", error));
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < 3) {
      const nextInput = index + 1;
      this[`otpInput${nextInput}`].focus();
    } else if (value === "" && index > 0) {
      const prevInput = index - 1;
      this[`otpInput${prevInput}`].focus();
    }
  };

  const handleFocus = (index) => {
    let tempOTP = [...otp];
    tempOTP[index] = true;
    const newOtp = [...otp];
    if (newOtp[index] !== "") {
      this[`otpInput${index}`].setNativeProps({
        selection: { start: 0, end: newOtp[index].length },
      });
    }
    setIsFocused(tempOTP);
  };

  const handleBlur = (index) => {
    let tempOTP = [...otp];
    tempOTP[index] = false;
    setIsFocused(tempOTP);
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && otp[index] === "") {
      const prevInput = index !== 0 ? index - 1 : index;
      this[`otpInput${prevInput}`].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/web/group_7504.png")}
        style={styles.image}
      />
      <View style={styles.phoneNumber}>
        <Text style={styles.enterOtp}>Your phone number</Text>

        <Text style={{ fontWeight: "bold", color: "black", marginLeft: 2 }}>
          {" "}
          {phoneNo}
        </Text>

        <TouchableOpacity
          style={styles.changeNumber}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ color: "blue", marginLeft: 10 }}>Change</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.info}>
        We are trying to fetch your OTP. Please wait...
      </Text>
      <Text style={styles.enterOtp}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp?.map((e, index) => (
          <TextInput
            key={index}
            style={[
              otp[index] === "" ? styles.otpInput : styles.otpInputFilled,
              {
                borderColor: isFocused[index] ? "blue" : "gray",
              },
            ]}
            maxLength={1}
            keyboardType="numeric"
            ref={(ref) => {
              this[`otpInput${index}`] = ref;
            }}
            onChangeText={(value) => handleOtpChange(index, value)}
            value={otp[index]}
            onFocus={() => handleFocus(index)}
            onBlur={() => handleBlur(index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            selectTextOnFocus={true}
            selectionColor={"blue"}
          />
        ))}
        {/* <TextInput
          style={otp[0] === '' ? styles.otpInput : styles.otpInputFilled}
          maxLength={1}
          keyboardType="numeric"
          ref={(ref) => {
            this.otpInput0 = ref;
          }}
          onChangeText={(value) => handleOtpChange(0, value)}
          value={otp[0]}

          onFocus={() => handleFocus(0)}
  onBlur={handleBlur}
  onKeyPress={(event) => handleKeyPress(event, 0)}
  selectTextOnFocus={true}
  selectionColor={'blue'}
        />
        <TextInput
          style={otp[1] === '' ? styles.otpInput : styles.otpInputFilled}
          maxLength={1}
          keyboardType="numeric"
          ref={(ref) => {
            this.otpInput1 = ref;
          }}
          onChangeText={(value) => handleOtpChange(1, value)}
          value={otp[1]}
        />
        <TextInput
          style={otp[2] === '' ? styles.otpInput : styles.otpInputFilled}
          maxLength={1}
          keyboardType="numeric"
          ref={(ref) => {
            this.otpInput2 = ref;
          }}
          onChangeText={(value) => handleOtpChange(2, value)}
          value={otp[2]}
        />
        <TextInput
          style={otp[3] === '' ? styles.otpInput : styles.otpInputFilled}
          maxLength={1}
          keyboardType="numeric"
          ref={(ref) => {
            this.otpInput3 = ref;
          }}
          onChangeText={(value) => handleOtpChange(3, value)}
          value={otp[3]}
        /> */}
      </View>
      <View style={styles.timerContainer}>
        {timer > 0 ? (
          <Text style={styles.resendDisabled}>00:{timer}</Text>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={handleResend}
            disabled={resendDisabled}
          >
            <Text style={styles.resendDisabled}>Didn't receive code?</Text>
            <Text
              style={resendDisabled ? styles.resendDisabled : styles.resend}
            >
              Resend code
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={
          otp.join("").length === 4
            ? styles.verifyButton
            : styles.verifyButtonDisabled
        }
        onPress={handleVerify}
        disabled={otp.join("").length !== 4}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    // marginBottom: 40,
  },
  phoneNumber: {
    flexDirection: "row",
    marginBottom: 15,
  },
  changeNumber: {},
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  enterOtp: {
    color: "gray",
    fontSize: 15,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 15,
    marginTop: 15,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
  },
  otpInputFilled: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "blue",
    color: "white",
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  resend: {
    marginRight: 5,
    color: "red",
  },
  resendDisabled: {
    color: "gray",
    marginRight: 5,
  },
  resendLink: {
    color: "blue",
  },
  fetching: {
    color: "gray",
  },
  verifyButton: {
    backgroundColor: "blue",
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  verifyButtonDisabled: {
    backgroundColor: "#ccc",
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  verifyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  tnc: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
  },
  tncLink: {
    color: "#007bff",
    marginLeft: 5,
  },
});

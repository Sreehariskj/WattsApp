import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  StatusBar,
} from 'react-native';
import {global} from '../styles/Global';

export default function Login({navigation}) {
  const [number, setNumber] = useState();
  return (
    <View style={global.darkContainer}>
      <StatusBar backgroundColor="#3C4043" />
      <View style={styles.form}>
        <Text style={global.titleText}>Enter your phone number</Text>
        <Text style={styles.verifyText}>
          WhatsApp will need to verify your phone number.What's my number ?
        </Text>
        <View style={styles.bottomGreen}>
          <Text style={styles.countryText}>India</Text>
        </View>
        <View style={styles.loginBox}>
          <View style={styles.bottomGreen}>
            <Text style={styles.codeText}>+ 91</Text>
          </View>
          <View style={styles.bottomGreen}>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter number"
              keyboardType="phone-pad"
              onChangeText={value => setNumber(value)}
              placeholderTextColor={'grey'}></TextInput>
          </View>
        </View>
        <Text style={styles.infoText}>Carrier charges may apply</Text>
      </View>
      <TouchableHighlight
        style={global.nextBtn}
        underlayColor={'lime'}
        onPress={() => navigation.navigate('Otp', {number})}>
        <Text style={global.nextText}>Next</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  verifyText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  countryText: {
    fontSize: 18,
    textAlign: 'center',
  },
  bottomGreen: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'green',
    padding: 5,
    justifyContent: 'center',
    //   backgroundColor:'green',
  },
  loginBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   alignItems:'center',
    //   marginTop:5
  },
  codeText: {
    width: 65,
    fontSize: 16,
    textAlign: 'center',
  },
  inputBox: {
    width: 180,
    padding: 0,
    fontSize: 15,
    color: 'white',
    //   height:30,
    //   backgroundColor:'red'
  },
  infoText: {
    fontSize: 15,
    fontWeight: '500',
    margin: 20,
    textAlign: 'center',
    color: 'grey',
  },
});

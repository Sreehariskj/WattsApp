import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {global} from '../styles/Global';

export default function Otp({navigation, route}) {
  const {number} = route.params;
  return (
    <View style={global.darkContainer}>
      <StatusBar backgroundColor="#3C4043" />
      <View style={styles.form}>
        <Text style={styles.verifyText}>Verify {number}</Text>
        <Text style={styles.infoText}>
          Waiting to automatically detect an SMS sent to {number} . What's my
          number ?
        </Text>
        <View style={global.bottomGreen}>
          <TextInput
            style={styles.inputBox}
            placeholder="Enter otp"
            keyboardType="phone-pad"
            maxLength={6}
            placeholderTextColor={'grey'}></TextInput>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.bottomGrey}>
            <View style={styles.row}>
              <Icon name="phone" color={'grey'} size={15}></Icon>
              <Text style={styles.optionText}>Resend Sms</Text>
              <Text style={styles.timeText}>1:05</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color={'grey'} size={15}></Icon>
            <Text style={styles.optionText}>Call me</Text>
            <Text style={styles.timeText}>1:05</Text>
          </View>
        </View>
      </View>
      <TouchableHighlight
        style={global.nextBtn}
        underlayColor={'lime'}
        onPress={() => navigation.navigate('Info')}>
        <Text style={global.nextText}>Next</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  verifyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  inputBox: {
    padding: 0,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    // width: 150,
    // backgroundColor:'red',
  },
  bottomGrey: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
    // paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    // backgroundColor:'red',
    // justifyContent:'space-between',
  },
  optionText: {
    fontSize: 15,
    marginLeft: 15,
    color: 'grey',
  },
  timeText: {
    position: 'absolute',
    right: 0,
    fontSize: 12,
    color: 'grey',
    //   backgroundColor:'yellow'
  },
});

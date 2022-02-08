import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, StatusBar} from 'react-native';
import {global} from '../styles/Global';

export default function Welcome({navigation}) {
  return (
    <View style={global.darkContainer}>
      <StatusBar backgroundColor="#3C4043" />
      <Text style={styles.welcomeText}>Welcome to WattsApp</Text>
      <Image
        style={styles.welcomeImg}
        source={require('../assets/welcomeImg.png')}></Image>
      <View style={styles.policyBox}>
        <Text style={styles.policyText}>
          Read our Privacy Policy.Tap "Agree and continue" to accept the Terms
          of Service.
        </Text>
        <TouchableHighlight
          style={styles.agreeBtn}
          underlayColor={'lime'}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.agreeText}>AGREE AND CONTINUE</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  welcomeImg: {
    width: '100%',
    height: 400,
    // backgroundColor:'red'
  },
  policyBox: {
    margin: 22,
  },
  policyText: {
    fontSize: 15,
    marginBottom: 25,
  },
  agreeBtn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25d366',
  },
  agreeText: {
    color:'#00202F',
    fontWeight:'bold',
    fontSize:15,
  },
});

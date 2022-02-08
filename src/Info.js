import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {global} from '../styles/Global';
import {useAuth} from './contexts/AuthContext';

export default function Info({navigation}) {
  const {setUsername} = useAuth();
  return (
    <View style={global.darkContainer}>
      <StatusBar backgroundColor="#3C4043" />
      <View style={styles.form}>
        <Text style={global.titleText}>Profile Info</Text>
        <Text style={styles.infoText}>
          Pleasee provide your name and an optional profile photo
        </Text>
        <Image style={styles.userImg} source={require('../assets/user.png')} />
        <View style={styles.row}>
          <View style={global.bottomGreen}>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter name"
              maxLength={20}
              onChangeText={name => setUsername(name)}
              placeholderTextColor={'grey'}></TextInput>
          </View>
          <Icon name="emoji-emotions" color={'grey'} size={20} />
        </View>
      </View>
      <TouchableHighlight
        style={global.nextBtn}
        underlayColor={'lime'}
        onPress={() => navigation.navigate('Drawer')}>
        <Text style={global.nextText}>Next</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '500',
    margin: 20,
    textAlign: 'center',
    color: 'grey',
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    margin: 5,
  },
  inputBox: {
    width: 250,
    padding: 0,
    fontSize: 15,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
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
  },
});

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../contexts/AuthContext';

export default function Profile() {
  const {username} = useAuth();
  return (
    <View style={styles.profile}>
      <Image
        source={require('../../assets/default.png')}
        style={styles.userImg}
      />
      <View>
        <Text style={styles.userText}>{username}</Text>
        <Text style={styles.infoText}>~ about ~</Text>
      </View>
      <Icon name="qrcode" color={'white'} size={25} style={styles.qrIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    width: '100%',
    height: '18%',
    backgroundColor: '#128C7E',
    alignItems: 'center',
    padding: 20,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 10,
  },
  userText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  infoText: {
    color: '#fff',
  },
  qrIcon: {
    marginLeft: 60,
  },
});

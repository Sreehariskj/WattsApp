import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {global} from '../styles/Global';

export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#075E54" />
      <Text style={styles.headerText}>WattsApp</Text>
      <View style={global.rightIconBox}>
        <Icon name="search" size={16} color={'#fff'} style={global.rightIcon} />
        <TouchableHighlight
          style={styles.toggle}
          underlayColor={'transparent'}
          onPress={() => navigation.openDrawer()}>
          <Icon
            name="ellipsis-v"
            size={18}
            color={'#fff'}
            style={global.rightIcon}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#075E54',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },

  icon: {
    margin: 10,
    height: 40,
  },
});

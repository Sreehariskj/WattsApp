import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Profile from './Profile';

export default function DrawerContent() {
  return (
    <View style={styles.container}>
      <Profile></Profile>
      <View style={styles.menuBox}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>New group</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>New broadcast</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Linked devices</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Starred messages</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Payment</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Status privacy</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Clear Call log</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  menuBox: {
    padding: 20,
  },
  menu: {
    padding: 10,
  },
  menuText: {
    fontSize: 18,
    color: '#000',
  },
});

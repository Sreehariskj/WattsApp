import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Camera() {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Icon name="bolt" size={20} color={'#fff'} />
        <View style={styles.center}>
          <Icon name="circle-thin" size={70} color={'#fff'} />
          <Text>Hold for video, tap for phote</Text>
        </View>
        <Icon name="camera" size={20} color={'#fff'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  center: {
    alignItems: 'center',
  },
});

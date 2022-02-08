import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {global} from '../../styles/Global';
import {Data} from '../Data/Data';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const renderItem = ({item}) => (
    <TouchableHighlight underlayColor={'transparent'}>
      <View style={global.chatCard}>
        <View style={global.leftSection}>
          <View style={styles.statusCircle}>
            <Image
              source={require('../../assets/status.jpg')}
              style={styles.statusImg}
            />
          </View>
          <View>
            <Text style={global.userText}>{item.name}</Text>
            {item.statusLoaded === 'now' ? (
              <Text style={global.infoText}>now</Text>
            ) : (
              <Text style={global.infoText}>
                {item.statusLoaded} minute ago
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={global.container}>
      <TouchableHighlight underlayColor={'transparent'}>
        <View style={global.chatCard}>
          <View style={global.leftSection}>
            <View>
              <Image
                source={require('../../assets/default.png')}
                style={global.userImg}
              />
              <Icon
                name="plus-circle"
                color={'green'}
                size={20}
                style={styles.addIcon}
              />
            </View>
            <View>
              <Text style={global.userText}>My status</Text>
              <Text style={global.infoText}>Tap to add status update</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
      <Text style={styles.recentText}>Recent updates</Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  statusImg: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 10,
  },
  addIcon: {
    position: 'absolute',
    top: 30,
    left: 32,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  recentText: {
    color: 'grey',
    margin: 5,
    marginLeft: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'white',
    marginRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#25D366',
  },
});
